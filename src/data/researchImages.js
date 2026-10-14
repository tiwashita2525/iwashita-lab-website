export const researchImageGroups = [
  {
    id: 'liquids',
    representative: 0,
    images: [
      {
        src: 'images/research/liquids/liquid_particle_structure.png',
        width: 496,
        height: 424,
        caption: {ja: '液体の粒子構造', en: 'Particle structure in a liquid'},
      },
      {
        src: 'images/research/liquids/ionic_liquid_structure.png',
        width: 288,
        height: 278,
        caption: {ja: 'イオン液体の構造', en: 'Ionic liquid structure'},
      },
      {
        src: 'images/research/liquids/oxide_melt_structure.png',
        width: 330,
        height: 278,
        caption: {ja: '酸化物融体の構造', en: 'Oxide melt structure'},
      },
      {
        src: 'images/research/liquids/aqueous_salt_solution.png',
        width: 270,
        height: 278,
        caption: {ja: '塩水溶液の構造', en: 'Aqueous salt solution structure'},
      },
    ],
  },
  {
    id: 'glasses',
    representative: 0,
    images: [
      {
        src: 'images/research/glasses/glass_particle_clusters.png',
        width: 556,
        height: 578,
        caption: {ja: 'クラスター構造', en: 'Cluster structure'},
      },
      {
        src: 'images/research/glasses/glass_blue_vector_field.png',
        width: 306,
        height: 296,
        caption: {ja: '局所変位場', en: 'Local displacement field'},
      },
      {
        src: 'images/research/glasses/glass_stress_strain_curve.png',
        width: 472,
        height: 478,
        caption: {ja: '応力–ひずみ曲線', en: 'Stress–strain curve'},
      },
      {
        src: 'images/research/glasses/glass_schematic_structure.png',
        width: 456,
        height: 474,
        caption: {ja: '模式図', en: 'Schematic structure'},
      },
    ],
  },
  {
    id: 'colloids',
    representative: 1,
    images: [
      {
        src: 'images/research/colloids/colloid_flow_simulation.jpeg',
        width: 274,
        height: 294,
        caption: {ja: 'コロイド流動のシミュレーション画像', en: 'Colloid flow simulation'},
      },
      {
        src: 'images/research/colloids/colloid_scattering_curves.png',
        width: 942,
        height: 566,
        caption: {ja: '散乱データの比較', en: 'Comparison of scattering data'},
      },
      {
        src: 'images/research/colloids/colloidal_samples.png',
        width: 894,
        height: 150,
        wide: true,
        caption: {ja: 'コロイド試料の実験写真', en: 'Experimental photograph of colloidal samples'},
      },
    ],
  },
];

export const researchImageCopy = {
  ja: {
    alt: (area, number) => `${area}の研究画像 ${number}`,
  },
  en: {
    alt: (area, number) => `Research image ${number} for ${area}`,
  },
};
