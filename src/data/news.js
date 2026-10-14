export const NEWS_CATEGORIES = ['publication', 'conference', 'lab_news', 'other'];

export const newsCategoryLabels = {
  ja: {
    publication: 'Publication',
    conference: 'Conference',
    lab_news: 'Lab News',
    other: 'Other',
  },
  en: {
    publication: 'Publication',
    conference: 'Conference',
    lab_news: 'Lab News',
    other: 'Other',
  },
};

/**
 * @typedef {{
 *   id: string,
 *   date: string,
 *   category: 'publication' | 'conference' | 'lab_news' | 'other',
 *   titleJa: string,
 *   titleEn: string,
 *   bodyJa: string,
 *   bodyEn: string,
 *   relatedUrl: string | null,
 * }} NewsItem
 */

/** @type {NewsItem[]} */
export const newsItems = [
  {
    id: 'koga2026localstress-publication',
    date: '2026-02-20',
    category: 'publication',
    titleJa: '論文が「材料」に掲載されました',
    titleEn: 'Article published in the Journal of the Society of Materials Science, Japan',
    bodyJa: '「高温における液体金属の粘度と局所応力の関係」が「材料」に掲載されました。',
    bodyEn: '“How Local Stress Governs the Flow of Metallic Liquids at High Temperatures” was published in the Journal of the Society of Materials Science, Japan (in Japanese).',
    relatedUrl: 'https://doi.org/10.2472/jsms.2025.00098',
  },
  {
    id: 'shiihara2026cooperative-publication',
    date: '2026-01-12',
    category: 'publication',
    titleJa: '論文がNature Communicationsに掲載されました',
    titleEn: 'Article published in Nature Communications',
    bodyJa: '“Cooperative atomic motion during shear deformation in metallic glass”がNature Communicationsに掲載されました。',
    bodyEn: '“Cooperative atomic motion during shear deformation in metallic glass” was published in Nature Communications.',
    relatedUrl: 'https://doi.org/10.1038/s41467-026-68308-4',
  },
];

export const sortNewsItems = items => [...items]
  .sort((a, b) => b.date.localeCompare(a.date));

export const getSortedNews = () => sortNewsItems(newsItems);

export const newsPageCopy = {
  ja: {
    latestTitle: '最新ニュース',
    latestLead: '研究室からの最新のお知らせを掲載します。',
    viewAll: 'ニュース一覧',
    emptyTitle: 'ニュースはまだ登録されていません。',
    emptyBody: '確認済みのお知らせを、準備ができ次第掲載します。',
    relatedLink: '関連ページ',
  },
  en: {
    latestTitle: 'Latest News',
    latestLead: 'The latest updates from Iwashita Laboratory.',
    viewAll: 'View all news',
    emptyTitle: 'No news has been posted yet.',
    emptyBody: 'Verified updates will be published here when available.',
    relatedLink: 'Related page',
  },
};
