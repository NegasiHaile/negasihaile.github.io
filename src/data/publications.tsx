export const publications = [
  {
    id: 1,
    title: (
      <>
        <b>ProverbEval:</b> Exploring LLM Evaluation Challenges for Low-resource
        Language Understanding
      </>
    ),
    abstract: (
      <>
        With the rapid development of evaluation datasets to assess LLMs
        understanding across a wide range of subjects and domains, identifying a
        suitable language understanding benchmark has become increasingly
        challenging. In this work, we explore LLM evaluation challenges for
        low-resource language understanding and introduce ProverbEval, LLM
        evaluation benchmark for low-resource languages based on proverbs to
        focus on low-resource language understanding in culture-specific
        scenarios. We benchmark various LLMs and explore factors that create
        variability in the benchmarking process. We observed performance
        variances of up to 50%, depending on the order in which answer choices
        were presented in multiple-choice tasks. Native language proverb
        descriptions significantly improve tasks such as proverb generation,
        contributing to improved outcomes. Additionally, monolingual evaluations
        consistently outperformed their cross-lingual counterparts. We argue
        special attention must be given to the order of choices, choice of
        prompt language, task variability, and generation tasks when creating
        LLM evaluation benchmarks.
      </>
    ),
    conference: `ACL 2025`,
    status: "In Review",
    start_at: "2024",
    end_at: "2024",
    publication_date: `2025`,
    paper_link:
      "https://arxiv.org/abs/2411.05049#:~:text=Fufa%20Balcha%2C-,Negasi%20Haile%20Abadi,-%2C%20Henok%20Biadglign",
    other_links: [],
  },
  {
    id: 0,
    title: (
      <>
        ERROR ANALYSIS OF <b>TIGRINYA–ENGLISH</b> MACHINE TRANSLATION SYSTEMS
      </>
    ),
    abstract: (
      <>
        <b>Machine translation (MT)</b> is an important language technology that
        can democratize access to information. In recent years, we have seen
        some progress in the development and deployment in production of MT
        systems for a handful of African languages. Evaluating the quality of
        such systems is fundamental to accelerating progress in this area.
        Tigrinya is a language that is spoken by more than 10 million native
        speakers mainly in Tigray, Ethiopia and Eritrea. In this work, we
        evaluated the current status of state-of-the-art MT systems that support
        the translation of Tigrinya to and from English: Google translate,
        Microsoft translator, and Lesan. We systematically collected a dataset
        for evaluating Tigrinya MT systems across four domains: Arts and
        Culture, Business and Economics, Politics as well as Science and
        Technology. The dataset contains snippets from 806 articles gathered
        from diverse sources. We performed an in-depth analysis of the errors
        current systems make using MQM-DQF standard error typology. We found
        that Mistranslation and Omission are the most frequent translation
        issues. We believe this work gives a methodology for evaluating other
        machine translation systems for low resource languages and we provide
        practical suggestions to improve current{" "}
        <b> Tigrinya - English MT systems</b>.
      </>
    ),
    conference: `4th Workshop on African Natural Language Processing, 2023`,
    status: "Published",
    start_at: "",
    end_at: "",
    publication_date: ``,
    paper_link: "https://openreview.net/pdf?id=BQVqNyzCxx",
    other_links: [
      {
        id: 1,
        title: "Dataset",
        link: "https://github.com/NegasiHaile/DS-Ti-En-MT-evaluation",
      },
    ],
  },
];
