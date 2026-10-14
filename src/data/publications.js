import englishPublicationData from './iwashita_publications_google_scholar.json';
import japanesePublicationData from './iwashita_japanese_publications.json';

export const PUBLICATION_TYPES = [
  'original_article',
  'review_commentary',
  'book_chapter',
  'correction_other',
];

/**
 * Publication data contract.
 * Japanese entries use language: 'ja' and must provide both titleJa and titleEn.
 * English entries may continue to use title, or use titleEn explicitly.
 *
 * @typedef {'original_article'|'review_commentary'|'book_chapter'|'correction_other'} PublicationType
 * @typedef {'ja'|'en'} PublicationLanguage
 * @typedef {Object} PublicationRecord
 * @property {string} id
 * @property {PublicationType} publicationType
 * @property {PublicationLanguage} language
 * @property {string=} title
 * @property {string=} titleJa
 * @property {string=} titleEn
 * @property {number} year
 * @property {string[]=} authors
 * @property {string=} doi
 * @property {string=} articleNumber
 */

const publicationTypeAliases = {
  'Original Articles': 'original_article',
  'Reviews & Commentaries': 'review_commentary',
  'Books & Book Chapters': 'book_chapter',
  'Corrections & Others': 'correction_other',
};

const publicationVenueNames = {
  'Nature communications': 'Nature Communications',
  'Physical review letters': 'Physical Review Letters',
  'Acta materialia': 'Acta Materialia',
  'Science advances': 'Science Advances',
};

const japaneseVenueEnglishNames = {
  'Journal of the Society of Materials Science, Japan（材料）': 'Journal of the Society of Materials Science, Japan',
  'アンサンブル': 'Ensemble',
  'サイバーメディアHPCジャーナル': 'High Performance Computer Journal',
  '放射光': 'Journal of JSSRR',
  '日本物理学会誌': 'Butsuri',
};

const japaneseRecords = japanesePublicationData.records.map(publication => ({
  ...publication,
  publicationType: publicationTypeAliases[publication.publicationType] || publication.publicationType,
}));
const duplicateTargets = new Map(
  japaneseRecords
    .filter(publication => publication.duplicateCandidate)
    .map(publication => [publication.duplicateCandidate, publication]),
);
const englishIds = new Set(englishPublicationData.map(publication => publication.id));

for (const targetId of duplicateTargets.keys()) {
  if (!englishIds.has(targetId)) {
    throw new Error(`Japanese publication duplicate target not found: ${targetId}`);
  }
}

const mergedEnglishRecords = englishPublicationData.map(publication => {
  const japaneseVersion = duplicateTargets.get(publication.id);
  if (!japaneseVersion) return publication;

  const {id, duplicateCandidate, issue, ...localizedData} = japaneseVersion;
  return {
    ...publication,
    ...localizedData,
    id: publication.id,
    title: publication.title,
    number: publication.number || issue,
  };
});
const additionalJapaneseRecords = japaneseRecords.filter(publication => !publication.duplicateCandidate);
const records = /** @type {PublicationRecord[]} */ ([...mergedEnglishRecords, ...additionalJapaneseRecords]);
const ids = new Set();
const identities = new Set();

for (const publication of records) {
  if (!publication.id || ids.has(publication.id)) {
    throw new Error(`Duplicate or missing publication id: ${publication.id || '(missing)'}`);
  }
  ids.add(publication.id);

  if (!PUBLICATION_TYPES.includes(publication.publicationType)) {
    throw new Error(`Unknown publication type for ${publication.id}: ${publication.publicationType}`);
  }
  if (!['ja', 'en'].includes(publication.language)) {
    throw new Error(`Unknown publication language for ${publication.id}: ${publication.language}`);
  }
  if (publication.language === 'ja' && (!publication.titleJa || !publication.titleEn)) {
    throw new Error(`Japanese publication requires titleJa and titleEn: ${publication.id}`);
  }
  if (publication.language === 'en' && !(publication.titleEn || publication.title)) {
    throw new Error(`English publication requires title or titleEn: ${publication.id}`);
  }

  const identityTitle = publication.titleEn || publication.titleJa || publication.title || '';
  const identity = `${publication.year}:${identityTitle.trim().toLowerCase()}`;
  if (identities.has(identity)) {
    throw new Error(`Duplicate publication record: ${publication.id}`);
  }
  identities.add(identity);
}

export const publications = records;

export const getPublicationTitle = (publication, interfaceLanguage) => {
  if (publication.language === 'ja') {
    return interfaceLanguage === 'ja'
      ? publication.titleJa
      : publication.titleEn;
  }
  return publication.titleEn || publication.title || publication.titleJa;
};

export const getPublicationVenue = (publication, interfaceLanguage) => {
  const venue = [publication.venue, publication.journal, publication.booktitle]
    .find(value => typeof value === 'string' && value.trim())
    ?.trim() || '';
  const normalizedVenue = publicationVenueNames[venue] || venue;
  if (interfaceLanguage === 'en' && publication.language === 'ja') {
    return japaneseVenueEnglishNames[normalizedVenue] || normalizedVenue;
  }
  return normalizedVenue;
};

export const formatPublicationPages = pages => typeof pages === 'string'
  ? pages.trim().replaceAll('--', '–')
  : '';

const decodeBibtexName = value => value
  .replaceAll("{\\'a}", 'á')
  .replaceAll("{\\'e}", 'é')
  .replaceAll("{\\'i}", 'í')
  .replaceAll("{\\'\\i}", 'í')
  .replaceAll("{\\'o}", 'ó')
  .replaceAll("{\\'u}", 'ú')
  .replaceAll("{\\'A}", 'Á')
  .replaceAll("{\\'E}", 'É')
  .replaceAll("{\\'I}", 'Í')
  .replaceAll("{\\'O}", 'Ó')
  .replaceAll("{\\'U}", 'Ú')
  .replace(/[{}]/g, '');

const initialForNamePart = part => {
  const cleaned = part.replace(/[^\p{L}]/gu, '');
  if (!cleaned) return '';
  if (/^[A-Z]{2,}$/.test(cleaned)) {
    return [...cleaned].map(letter => `${letter}.`).join(' ');
  }
  return `${[...cleaned][0].toUpperCase()}.`;
};

const initialsForGivenNames = givenNames => givenNames
  .split(/\s+/)
  .filter(Boolean)
  .map(part => part.split('-').map(initialForNamePart).filter(Boolean).join('-'))
  .filter(Boolean)
  .join(' ');

export const formatPublicationAuthor = author => {
  const decoded = decodeBibtexName(author.trim());
  const commaParts = decoded.split(',').map(part => part.trim()).filter(Boolean);
  let familyName;
  let givenNames;

  if (commaParts.length > 1) {
    familyName = commaParts[0];
    givenNames = commaParts[commaParts.length - 1];
  } else {
    const nameParts = decoded.split(/\s+/).filter(Boolean);
    familyName = nameParts.pop() || '';
    givenNames = nameParts.join(' ');
  }

  const initials = initialsForGivenNames(givenNames);
  const normalizedFamilyName = familyName
    .normalize('NFKD')
    .replace(/[^\p{L}]/gu, '')
    .toLowerCase();
  const isIwashita = normalizedFamilyName === 'iwashita' && initials === 'T.';
  return {
    label: isIwashita ? 'T. Iwashita' : [initials, familyName].filter(Boolean).join(' '),
    isIwashita,
  };
};
