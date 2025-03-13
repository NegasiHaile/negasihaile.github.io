import {
  AGP_1,
  AGP_3,
  AGP_6,
  // DiabetesInter_2,
  // DiabetesInter_4,
  // DiabetesInter_5,
  // DiabetesInter_6,
  // DiabetesInter_7,
  // DiabetesInter_9,
  // DiabetesInter_10,
  // DiabetesInter_11,
  // DiabetesInter_13,
  // DiabetesInter_14,
  Afro_CXR_1,
  Afro_CXR_2,
  Afro_CXR_3,
  Afro_CXR_4,
  Afro_CXR_5,
  Afro_CXR_6,
  Fmcms_1,
  Fmcms_2,
  Fmcms_3,
  Fmcms_4,
  Fmcms_5,
  Fmcms_6,
  Fmcms_7,
  HornChat_1,
  HornChat_2,
  You_com_01,
  You_com_02,
  You_com_03,
  You_com_04,
  rFleet_01,
  rFleet_02,
  rFleet_03,
  rFleet_04,
  mendable_chatbot_01,
} from "../utils/images";

export const projects = [
  // "Continues Glucose Monitoring (CGM)"

  // Afro Chest X-ray
  {
    id: 3,
    category: "Data Science", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "AfroCXR: Afro Chest X-ray",
    description: (
      <>
        The Chest X-ray Imaging Dataset for Multiple Cardio-respiratory Diseases
        in Ethiopia (Afro Chest X-ray for short) is a project funded by the
        LacunaFund whose aim is to close the gap in health disparities by
        fostering interdisciplinary collaborations that create, expand, or
        aggregate labeled training and evaluation datasets.
        <br />
        <br />
        Significant progress has been made in publicly available chest X-ray
        datasets for machine learning applications. However, most existing
        datasets are collected from limited regions, often excluding African
        representation.
        <br />
        <br />
        To address this gap, we curated a dataset of<b> 55,409 chest X-ray </b>
        images from
        <b>
          {" "}
          48,962 patients, including 18,324 males, 30,387 females, and 260
          individuals with undefined gender{" "}
        </b>
        , retrospectively collected from
        <b>
          {" "}
          10 healthcare institutions in Ethiopia studied between 2015 and 2024{" "}
        </b>
        . The dataset includes 31,939 images paired with corresponding radiology
        reports and 11,806 manually annotated images by 11 radiology experts
        using a blinded review process. The annotations focus on localized
        findings, which are particularly relevant for regional disease patterns.
        This dataset, presented both in JPG and DICOM format along with patient
        demographics and machine-readable radiology reports, provides a novel
        resource for developing machine-learning models tailored to
        underrepresented populations. This study aims to enhance global
        diagnostic accuracy and foster equitable chest diagnosis advancements by
        addressing gaps in chest X-ray data diversity and geographical
        representation.
        <br />
        <br />
        <b>In this project my role includes: </b>
        <p>• Leading the data collection team.</p>
        <p>
          • Preparing data collection guidelines based on the healthcare
          institutions data management challenges.
        </p>
        <p>• Preprocessing and standardizing the data into final forms.</p>
        <p>
          • Developing annotation tools, creating annotation guidelines, and
          training/assisting radiologists with the annotation process.
        </p>
        <p>• Analyzing the annotated data and creating a baseline model.</p>
        <br />
        <b>
          The dataset will be released very soon. We are currently writing the
          dataset paper. Stay tuned!
        </b>
      </>
    ), // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["Python", "Pydicom", "dicom2jpg"],
    demo: "https://github.com/asmelashteka/Afro-Chest-X-ray",
    git: `https://github.com/NegasiHaile/afro-chest-x-ray`,
    status: "Paper Writing",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [
      Afro_CXR_1,
      Afro_CXR_2,
      Afro_CXR_3,
      Afro_CXR_4,
      Afro_CXR_5,
      Afro_CXR_6,
    ],
  },

  // Ambulatory Glucose Profile (AGP) report
  {
    id: 1,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "Ambulatory Glucose Profile (AGP) report",
    description: `A web app project for Continuous Glucose Monitoring (CGM) data visualization with Ambulatory Glucose Profile (AGP) report focuses on leveraging glucose data to revolutionize diabetes management. It collects real-time glucose data from LibreView, providing actionable insights for patients and clinicians through visaulizing in charts. Key features include Time In Range (TIR) analysis, which highlights the percentage of time a patient’s glucose levels stay within the target range, and Glucose Metrics, offering statistical insights like average glucose and variability. The project also includes Ambulatory Glucose Profile (AGP) for visualizing glucose trends and patterns over 2 weeks (14 days) and Daily Glucose Profile, showcasing day-to-day glucose fluctuations. Together, these tools aim to enhance decision-making, optimize treatment, and improve overall diabetes care.`, // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["JavaScript", "ReactJS", "ChartJS"],
    demo: "https://cgm-agp.vercel.app/",
    git: "https://github.com/NegasiHaile/agp",
    // youtube:
    //   "https://youtube.com/playlist?list=PLIgg_qVBmD-c-yU5_sNkhIO__9FrHLyFh&feature=shared",
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [AGP_1, AGP_3, AGP_6],
  },

  // rFleet International Shipment
  {
    id: 0,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "Logistics", // Health, E-commerce, Real Estate
    title: "rFleet International Shipment",
    description: `rFleet is an advanced International Shipment Logistics Platform designed to streamline global shipping operations. It offers real-time tracking, efficient route optimization, and seamless coordination of shipments across borders. Integrated with a smart chatbot developed using Microsoft Power Virtual Agents, rFleet provides clients with instant assistance for tracking shipments, resolving queries, and accessing crucial logistics updates. The chatbot leverages AI-powered natural language processing to deliver personalized support, ensuring quick resolutions and enhancing customer experience. With its robust features and intelligent chatbot integration, rFleet empowers businesses to simplify logistics management and improve operational efficiency on a global scale.`, // Put what this project do, and what problem it solve
    pinned: false, // true/false
    tech_stack: ["NextJS", "Supabase", "Power Virtual Agents"],
    demo: "https://negasi-rfleet.vercel.app/",
    git: `https://github.com/NegasiHaile/rFLEET`,
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [rFleet_01, rFleet_02, rFleet_03, rFleet_04],
  },

  // DEMER Healthcare HR
  {
    id: 4,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "DEMER HR",
    description: `Healthcare Human Resource Management System is a comprehensive solution designed to streamline the operations of healthcare institutions. It centralizes key processes such as patient management, inventory tracking, billing, and staff scheduling, enabling seamless coordination across departments. The system enhances operational efficiency by integrating modules for electronic medical records (EMR), appointment scheduling, and financial management. It provides real-time data insights, aiding in informed decision-making and compliance with healthcare regulations. With features tailored for the healthcare industry, this ERP system ensures improved patient care, optimized resource utilization, and robust administrative control, making it an essential tool for modern healthcare institutions.`, // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["NestJS", "ReactJS", "PostgreSQL", "GraphQL"],
    demo: "https://demer-hrms.vercel.app/",
    git: "https://github.com/NegasiHaile/HRMS-client",
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [],
  },

  // FMCMS
  {
    id: 5,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "ERP", // Health, E-commerce, Real Estate
    title: "FMCMS ",
    description: `Fiscal Machine Controlling and Management System (FMCMS) which tracks the process of importing and selling POS machine in Ethiopia. The FMCMS project involves the implementation of 9 user types, each with their own privileges. It utilizes the MERN stack technology (MongoDB, Express JS, React JS, and Node JS).`, // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["MERN", "Bootstrap", "react-pdf"],
    demo: "https://fmcms.vercel.app/",
    git: `https://github.com/NegasiHaile/FMCMS`,
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [Fmcms_1, Fmcms_2, Fmcms_3, Fmcms_4, Fmcms_5, Fmcms_6, Fmcms_7],
  },

  // EthioAI Hub
  {
    id: 6,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "AI Hub", // Health, E-commerce, Real Estate
    title: "EthioAI Hub",
    description: `EthioAI HUB is a comprehensive web platform dedicated to archiving and preserving AI-related works from Ethiopia. The platform serves as a centralized repository for Machine Learning models, datasets, research papers, and other resources related to Artificial Intelligence within the Ethiopian context. The goal of the HUB is to document and showcase the growing body of AI research and innovation emerging from Ethiopia, while also making these resources easily accessible to researchers, students, and AI practitioners both locally and internationally. Whether you're looking for datasets in Amharic, Tigrinya, and Oromo languages, or seeking cutting-edge AI models trained for Ethiopian-specific challenges, EthioAI HUB is your go-to resource for exploring the diverse and impactful AI developments coming out of Ethiopia.`, // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["NextJS", "TailwinddCSS"],
    demo: "https://negasihaile.github.io/ethioai-hub/",
    git: `https://github.com/NegasiHaile/ethioai-hub`,
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [],
  },

  {
    id: 7,
    category: "Web Application",
    sub_category: "Chat bot",
    title: "HornChat",
    description: `HornChat is a chatbot built with a combination of Large Language Models(LLM) and Translation Systems to solve the linguistic barriers of low-resource languages specifically Horn of Africa languages. Our mission is to provide a seamless assistance for users to communicate with Large Language Models like ChatGPT using their language.`,
    pinned: true,
    tech_stack: ["OpenAI", "Lesan.ai", "Chatbot UI"],
    demo: "https://horn-chat.vercel.app",
    git: `https://github.com/NegasiHaile/HornChat`,
    status: "Done",
    start_at: "2023-08",
    end_at: "2023-11",
    images: [HornChat_1, HornChat_2],
  },

  {
    id: 8,
    category: "Web Application",
    sub_category: "Chat bot",
    title: "You.com Clone",
    description: `This project is a clone of YOU.com, built with Next.js 14 and Tailwind CSS. The purpose of this project is to learn how to build a modern chatbot, explore the new features introduced in Next.js 14, gain hands-on experience with Tailwind CSS, and integrate the OpenAI API to create an intelligent search experience.`,
    pinned: false,
    tech_stack: ["GPT API", "Next 14"],
    demo: "",
    git: `https://github.com/NegasiHaile/you.com-clone`,
    status: "Done",
    start_at: "2023-08",
    end_at: "2023-11",
    images: [You_com_01, You_com_02, You_com_03, You_com_04],
  },

  {
    id: 9,
    category: "Web Application",
    sub_category: "Chat bot",
    title: "NEAR Chatbot",
    description: `This is chatbot for NEAR using the MendableAI API. NEAR is a user-friendly and carbon-neutral blockchain, built to be fast, secure, and able to grow without limits. NEAR is the blockchain for everyone.`,
    pinned: false,
    tech_stack: ["Mendable AI", "ai", "Next 13"],
    demo: "https://mendable-chatbot.vercel.app/",
    git: `https://github.com/NegasiHaile/mendableai-chatbot`,
    status: "Done",
    start_at: "2023-08",
    end_at: "2023-11",
    images: [mendable_chatbot_01],
  },

  {
    id: 10,
    category: "Dataset",
    sub_category: "NLP",
    title: "Error Analysis of ti-en MT systems",
    description: `A dataset for the research project “ERROR ANALYSIS OF TIGRINYA–ENGLISH MACHINE TRANSLATION SYSTEMS”. In this project, we evaluated the status of three state-of-the-art MT systems that support the translation of Tigrinya to and from English: Google translate, Microsoft translator, and Lesan. Tigrinya is a language spoken by 10+ million people.`,
    pinned: false,
    tech_stack: ["MQM-DQF", "Lesan", "Google-T", "Microsoft-T"],
    demo: "https://github.com/NegasiHaile/error-analysis-of-TI-EN-MT-systems",
    git: `https://github.com/NegasiHaile/error-analysis-of-TI-EN-MT-systems`,
    status: "Done",
    start_at: "2023-08",
    end_at: "2023-11",
    images: [],
  },
];
