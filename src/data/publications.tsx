export const publications = [
  {
    id: 2,
    title: (
      <>
        Viability of Machine Translation for Healthcare in Low-Resourced
        Languages
      </>
    ),
    abstract: (
      <>
        Prior work shows that physicians rely on commercially available Machine
        Translation systems, which are not designed with the medical system as a
        usecase. Errors in high-stakes settings like healthcare pose unique
        risks that could lead to clinical harm.
        <br /> <br />
        The challenge is even more pronounced for low-resourced languages where
        human translators are scarce and MT tools per form poorly. In this work,
        we analyze the performance of publicly available Machine Translation
        tools for errors in medical translation and test two pre and
        post-translation interventions for their effectiveness in reducing
        clinical harm. We focus on two low resourced languages: Amharic and
        Tigrinya. Using publicly available datasets, we find that MT errors for
        healthcare most commonly happen when the source sentence includes:
        medical terminology, synonyms, figurative language, and descriptions of
        medical procedures. We find that pre and post-translation interventions
        are not effective in reducing clinical harm if the base translation
        model performs poorly. Based on our findings, we provide recommendations
        for NLP researchers and medical professionals.
      </>
    ),
    conference: `EMNLP 2025`,
    status: "Paper Writing",
    start_at: "2024",
    end_at: "2025",
    publication_date: `2025`,
    paper_link: "",
    other_links: [],
    pinned: true,
  },
  {
    id: 2,
    title: (
      <>
        <b>Afro Chest X-ray:</b> Chest X-ray Imaging Dataset for Multiple
        Cardio-respiratory Diseases in Ethiopia
      </>
    ),
    abstract: (
      <>
        The Chest X-ray Imaging Dataset for Multiple Cardio-respiratory Diseases
        in Ethiopia (Afro Chest X-ray for short) is a project funded by the
        LacunaFund whose aim is to close the gap in health disparities by
        fostering interdisciplinary collaborations that create, expand, or
        aggregate labeled training and evaluation datasets.
        <br /> <br />
        Cardio-respiratory diseases (cardiovascular and respiratory diseases)
        are recognized as serious, worldwide public health concerns that have
        remained among the leading causes of death globally. There are not many
        publicly available datasets from Africa making it difficult to determine
        whether tools and techniques developed in other geographies are as
        effective in our context. In this project, we propose to create a
        labeled chest X-ray dataset for multiple cardio respiratory diseases in
        Ethiopia. We will publish the dataset as open source. We believe this
        dataset will stimulate researchers and practitioners in Africa and
        beyond to push the limits of current methods to adapt them to the
        African context and build assistive technologies that could empower the
        scarce radiologists.
      </>
    ),
    conference: `NeurIPS 2025`,
    status: "Paper Writing",
    start_at: "2022",
    end_at: "2024",
    publication_date: `2025`,
    paper_link: "https://github.com/asmelashteka/Afro-Chest-X-ray",
    other_links: [],
    pinned: true,
  },
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
    conference: `NAACL 2025`,
    status: "Published",
    start_at: "2024",
    end_at: "2024",
    publication_date: `2025`,
    paper_link: "https://arxiv.org/abs/2411.05049",
    other_links: [],
    pinned: false,
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
    pinned: false,
  },
];
