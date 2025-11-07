export interface Question {
  id: number;
  title: string;
  story: string;
  /*graphic?: ReactNode;*/
}

export const questions: Question[] = [
  {
    id: 1,
    title:
      "How are CO₂ emissions distributed globally — who are the major polluters (Goliaths)?",
    story: `...`,
    /*graphic: <EmissionsChart />,*/
  },
  {
    id: 2,
    title: "How do their strategies and promises affect global warming?",
    story: `...`,
    /*graphic: <StrategyTimeline />,*/
  },
  {
    id: 3,
    title:
      "Which countries and communities (Davids) are most affected by climate change?",
    story: `...`,
    /*graphic: <ImpactMap />,*/
  },
  {
    id: 4,
    title:
      "How do the actions of major polluters affect other Goliath countries?",
    story: `...`,
    /*graphic: <InterconnectionGraph />,*/
  },
  {
    id: 5,
    title:
      "Are the most vulnerable countries receiving enough help for climate mitigation?",
    story: `...`,
    /*graphic: <InterconnectionGraph />,*/
  },
  {
    id: 6,
    title:
      "Based on current trends, when and how might Goliaths meet their climate goals?",
    story: `...`,
    /*graphic: <InterconnectionGraph />,*/
  },
  {
    id: 7,
    title: "How should current strategies change to truly achieve “net zero”?",
    story: `...`,
    /*graphic: <InterconnectionGraph />,*/
  },
];
