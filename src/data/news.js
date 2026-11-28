export const NEWS_CATEGORIES = ['publication', 'conference', 'lab_news', 'research_visit', 'seminar', 'meeting', 'experiment', 'other'];

export const newsCategoryLabels = {
  ja: {
    publication: 'Publication',
    conference: 'Conference',
    lab_news: 'Lab News',
    research_visit: 'Research Visit',
    seminar: 'Seminar',
    meeting: 'Meeting',
    experiment: 'Experiment',
    other: 'Other',
  },
  en: {
    publication: 'Publication',
    conference: 'Conference',
    lab_news: 'Lab News',
    research_visit: 'Research Visit',
    seminar: 'Seminar',
    meeting: 'Meeting',
    experiment: 'Experiment',
    other: 'Other',
  },
};

/**
 * @typedef {{
 *   id: string,
 *   date: string,
 *   displayDate?: {ja: string, en: string},
 *   displayDateTime?: string,
 *   category: 'publication' | 'conference' | 'lab_news' | 'research_visit' | 'seminar' | 'meeting' | 'experiment' | 'other',
 *   titleJa: string,
 *   titleEn: string,
 *   bodyJa: string,
 *   bodyEn: string,
 *   relatedUrl: string | null,
 *   presentations?: Array<{ja: string, en: string}>,
 *   additionalLinks?: Array<{
 *     url: string,
 *     label: {ja: string, en: string},
 *     description?: {ja: string, en: string},
 *   }>,
 * }} NewsItem
 */

/** @type {NewsItem[]} */
export const newsItems = [
  {
    id: 'jps-kyushu-branch-meeting-2026',
    date: '2026-11-28',
    category: 'conference',
    titleJa: '第132回日本物理学会九州支部例会で研究発表',
    titleEn: 'Research Presentations at the 132nd JPS Kyushu Branch Meeting',
    bodyJa: '2026年11月28日、久留米工業大学で開催された第132回日本物理学会九州支部例会において、荷電コロイドに関する2件の研究発表を行いました。',
    bodyEn: 'On November 28, 2026, TI Lab presented two studies on charged colloidal systems at the 132nd Meeting of the Kyushu Branch of the Physical Society of Japan, held at Kurume Institute of Technology.',
    relatedUrl: null,
    presentations: [
      {
        ja: 'G-3「pH測定による荷電コロイド結晶の物理化学的特性：KOH溶液添加時の効果」',
        en: 'G-3: Physicochemical Properties of Charged Colloidal Crystals Investigated by pH Measurements: Effects of KOH Solution Addition',
      },
      {
        ja: 'G-10「大気平衡下における無塩系荷電コロイド水溶液の粘度のセルモデル解析」',
        en: 'G-10: Cell-Model Analysis of the Viscosity of Salt-Free Charged Colloidal Aqueous Dispersions under Atmospheric Equilibrium',
      },
    ],
  },
  {
    id: 'spring-8-inelastic-x-ray-scattering-2026',
    date: '2026-11-26',
    category: 'experiment',
    titleJa: 'SPring-8で非弾性X線散乱実験を実施',
    titleEn: 'Inelastic X-ray Scattering Experiments at SPring-8',
    bodyJa: '2026年11月20日〜26日、SPring-8にて、UT、ORNL、FITの共同研究者と非弾性X線散乱実験を実施しました。',
    bodyEn: 'From November 20 to 26, 2026, we conducted inelastic X-ray scattering experiments at SPring-8 in collaboration with researchers from UT, ORNL, and FIT.',
    relatedUrl: null,
  },
  {
    id: 'crest-yuragi-area-meeting-2026',
    date: '2026-11-19',
    category: 'meeting',
    titleJa: 'CREST「ゆらぎ材料」第2回領域会議にオンライン参加',
    titleEn: 'Participated in the Second CREST “Fluctuating Materials” Area Meeting',
    bodyJa: '2026年11月19日、CREST「ゆらぎ材料」の第2回領域会議にオンラインで参加しました。',
    bodyEn: 'On November 19, 2026, we participated online in the second area meeting of the CREST “Fluctuating Materials” research area.',
    relatedUrl: null,
  },
  {
    id: 'toyota-technological-institute-visit-2026',
    date: '2026-10-09',
    category: 'research_visit',
    titleJa: '豊田工業大学から研究室訪問',
    titleEn: 'Research Visit from Toyota Technological Institute',
    bodyJa: '10月5日〜9日、豊田工業大学・椎原研究室のS. T.さん（M1）がTI Labに滞在し、研究交流を行いました。',
    bodyEn: "We hosted S. T., a first-year master's student from the Shiihara Laboratory at Toyota Technological Institute, for a research visit from October 5 to 9, 2026.",
    relatedUrl: null,
  },
  {
    id: 'joint-research-seminar-2026',
    date: '2026-10-07',
    category: 'seminar',
    titleJa: '合同研究セミナーを開催しました',
    titleEn: 'Joint Research Seminar',
    bodyJa: '10月7日、大分大学理工学部・大津研究室と合同研究セミナーを開催し、研究発表と議論を通じて交流を深めました。',
    bodyEn: 'On October 7, we held a joint research seminar with the Otsu Laboratory, Faculty of Science and Technology, Oita University, to exchange research findings and discuss ongoing projects.',
    relatedUrl: null,
  },
  {
    id: 'glass-elastic-deformation-publication-2026',
    date: '2026-05-26',
    category: 'publication',
    titleJa: 'ガラスの弾性変形に関する論文が掲載されました',
    titleEn: 'Paper Published in Journal of Physics: Condensed Matter',
    bodyJa: '金属ガラスおよび共有結合性ガラスの弾性変形に伴う局所構造の変化を調べた論文が、Journal of Physics: Condensed Matterに掲載されました。',
    bodyEn: 'Our paper on short- and medium-range structural changes during elastic deformation of metallic and covalent glasses was published in Journal of Physics: Condensed Matter.',
    relatedUrl: 'https://doi.org/10.1088/1361-648X/ae6d65',
  },
  {
    id: 'colloid-sans-publication-2026',
    date: '2026-03-01',
    displayDate: {
      ja: '2026年3月号',
      en: 'March 2026 issue',
    },
    displayDateTime: '2026-03',
    category: 'publication',
    titleJa: 'コロイドの小角中性子散乱に関する論文が掲載されました',
    titleEn: 'Paper Published in Chinese Physics B',
    bodyJa: 'コロイド分散系の小角中性子散乱スペクトルについて、装置分解能によるスメアリング効果を考慮した理論的な解析手法に関する共同研究論文が、Chinese Physics Bに掲載されました。',
    bodyEn: 'Our collaborative paper on the theoretical synthesis of small-angle neutron scattering spectra of hard-sphere colloids, accounting for instrumental smearing effects, was published in Chinese Physics B.',
    relatedUrl: 'https://doi.org/10.1088/1674-1056/adf61c',
  },
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
    additionalLinks: [
      {
        url: 'https://www.oita-u.ac.jp/000069581.pdf',
        label: {
          ja: '大分大学プレスリリース（PDF）',
          en: 'Press Release (Oita University, Japanese PDF)',
        },
        description: {
          ja: '本研究成果について、大分大学からプレスリリースが発表されました。',
          en: 'Oita University has issued a press release highlighting this research.',
        },
      },
    ],
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
    presentationsLabel: '発表題目',
  },
  en: {
    latestTitle: 'Latest News',
    latestLead: 'The latest updates from TI Lab.',
    viewAll: 'View all news',
    emptyTitle: 'No news has been posted yet.',
    emptyBody: 'Verified updates will be published here when available.',
    relatedLink: 'Related page',
    presentationsLabel: 'Presentations',
  },
};
