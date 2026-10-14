/**
 * @typedef {{ja: string | null, en: string | null}} LocalizedText
 * @typedef {{
 *   id: string,
 *   grade: LocalizedText,
 *   initials: string | null,
 *   researchTopic: LocalizedText,
 * }} UndergraduateMember
 * @typedef {{
 *   id: string,
 *   grade: LocalizedText,
 *   fullName: LocalizedText,
 *   publicationConsent: true,
 *   researchTopic: LocalizedText,
 * }} GraduateMember
 */

export const memberDirectory = {
  academicYear: 2026,
  principalInvestigator: {
    name: {
      ja: 'Takuya Iwashita',
      en: 'Takuya Iwashita',
    },
    position: {
      ja: '大分大学 准教授',
      en: 'Associate Professor, Oita University',
    },
  },
  undergraduateStudents: {
    grade: {
      ja: 'B4',
      en: 'B4',
    },
    nameDisplay: 'initials',
    /** @type {UndergraduateMember[]} */
    members: [
      {
        id: 'b4-01',
        grade: {ja: 'B4', en: 'B4'},
        initials: null,
        researchTopic: {ja: null, en: null},
      },
      {
        id: 'b4-02',
        grade: {ja: 'B4', en: 'B4'},
        initials: null,
        researchTopic: {ja: null, en: null},
      },
    ],
  },
  graduateStudents: {
    allowedGrades: ['M1', 'M2', 'Doctoral'],
    nameDisplay: 'fullNameWithConsent',
    /** @type {GraduateMember[]} */
    members: [],
  },
};

export const memberPageCopy = {
  ja: {
    lead: '2026年度の研究室メンバーを、本人の掲載同意とプライバシーに配慮して紹介します。',
    principalInvestigator: 'Principal Investigator',
    undergraduateStudents: 'Undergraduate Students',
    graduateStudents: 'Graduate Students',
    academicYear: year => `${year}年度`,
    people: count => `${count}名`,
    initialsPending: 'イニシャル未登録',
    researchTopic: '研究テーマ',
    topicPending: '未登録',
    graduateEmpty: '現在、掲載登録されている大学院生はいません。',
    graduatePolicy: 'M1・M2・博士課程の学生は、本人の同意を得た場合にフルネームと研究テーマを掲載します。',
    doctoral: '博士課程',
  },
  en: {
    lead: 'Meet the laboratory members for the 2026 academic year, listed with attention to consent and privacy.',
    principalInvestigator: 'Principal Investigator',
    undergraduateStudents: 'Undergraduate Students',
    graduateStudents: 'Graduate Students',
    academicYear: year => `Academic Year ${year}`,
    people: count => `${count} students`,
    initialsPending: 'Initials not registered',
    researchTopic: 'Research Topic',
    topicPending: 'Not registered',
    graduateEmpty: 'No graduate students are currently registered for publication.',
    graduatePolicy: 'Full names and research topics for M1, M2, and doctoral students are published only with their consent.',
    doctoral: 'Doctoral',
  },
};
