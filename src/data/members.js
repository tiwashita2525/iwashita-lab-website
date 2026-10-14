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
        initials: 'S. O.',
        researchTopic: {
          ja: '荷電コロイド分散系の粘度に関する研究',
          en: 'Viscosity of Charged Colloidal Dispersions',
        },
      },
      {
        id: 'b4-02',
        grade: {ja: 'B4', en: 'B4'},
        initials: 'T. T.',
        researchTopic: {
          ja: '流れるコロイド結晶のレオロジーに関する研究',
          en: 'Rheology of Flowing Colloidal Crystals',
        },
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
    lead: '',
    principalInvestigator: 'Principal Investigator',
    undergraduateStudents: 'Undergraduate Students',
    graduateStudents: 'Graduate Students',
    academicYear: year => `${year}年度`,
    people: count => `${count}名`,
    initialsPending: 'イニシャル未登録',
    researchTopic: '研究テーマ',
    topicPending: '未登録',
    graduateEmpty: '大学院生は随時募集中です。',
    doctoral: '博士課程',
  },
  en: {
    lead: '',
    principalInvestigator: 'Principal Investigator',
    undergraduateStudents: 'Undergraduate Students',
    graduateStudents: 'Graduate Students',
    academicYear: year => `Academic Year ${year}`,
    people: count => `${count} students`,
    initialsPending: 'Initials not registered',
    researchTopic: 'Research Topic',
    topicPending: 'Not registered',
    graduateEmpty: 'Graduate students are welcome to join our lab.',
    doctoral: 'Doctoral',
  },
};
