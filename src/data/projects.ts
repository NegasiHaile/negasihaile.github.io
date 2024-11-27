import {
  AGP_1,
  AGP_3,
  AGP_4,
  AGP_5,
  AGP_6,
  AGP_7,
  DiabetesInter_2,
  DiabetesInter_4,
  DiabetesInter_5,
  DiabetesInter_6,
  DiabetesInter_7,
  DiabetesInter_9,
  DiabetesInter_10,
  DiabetesInter_11,
  DiabetesInter_13,
  DiabetesInter_14,
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
} from "../utils/images";

export const projects = [
  {
    id: 1,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "Continues Glucose Monitoring (CGM)",
    description: `A web app project for Continuous Glucose Monitoring (CGM) data visualization with Ambulatory Glucose Profile report focuses on leveraging glucose data to revolutionize diabetes management. It collects real-time glucose data from LibreView, providing actionable insights for patients and clinicians through visaulizing in charts. Key features include Time In Range (TIR) analysis, which highlights the percentage of time a patient’s glucose levels stay within the target range, and Glucose Metrics, offering statistical insights like average glucose and variability. The project also includes Ambulatory Glucose Profile (AGP) for visualizing glucose trends and patterns over 2 weeks (14 days) and Daily Glucose Profile, showcasing day-to-day glucose fluctuations. Together, these tools aim to enhance decision-making, optimize treatment, and improve overall diabetes care.`, // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["JavaScript", "ReactJS", "ChartJS"],
    demo: "https://cgm-agp.vercel.app/",
    git: "https://github.com/NegasiHaile/agp",
    youtube:
      "https://youtube.com/playlist?list=PLIgg_qVBmD-c-yU5_sNkhIO__9FrHLyFh&feature=shared",
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [AGP_1, AGP_3, AGP_4, AGP_5, AGP_6, AGP_7],
  },

  {
    id: 2,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "Deiabets Intervention System",
    description: `A Diabetes Intervention System is a cutting-edge healthcare solution designed to assist clinicians in making quick and informed decisions regarding patient care. The system streamlines the process of reviewing and updating patient medication by providing real-time insights and data-driven recommendations. Integrated with patient health records, it allows seamless tracking of glucose levels, medication history, and treatment outcomes. This tool enhances clinical efficiency, reduces decision-making time, and ensures personalized care. With its user-friendly interface and advanced analytics, it empowers healthcare providers to improve patient outcomes and support proactive diabetes management.`, // Put what this project do, and what problem it solve
    pinned: true, // true/false
    tech_stack: ["C#", "SQL", "ReactJS", "FHIR"],
    demo: "https://diabetes-intervention.vercel.app/",
    git: ``,
    status: "Done",
    start_at: "2023-04",
    end_at: "2024-04",
    images: [
      DiabetesInter_2,
      DiabetesInter_4,
      DiabetesInter_5,
      DiabetesInter_6,
      DiabetesInter_7,
      DiabetesInter_9,
      DiabetesInter_10,
      DiabetesInter_11,
      DiabetesInter_13,
      DiabetesInter_14,
    ],
  },

  {
    id: 3,
    category: "Data Science", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "Afro Chest X-ray",
    description: `The Chest X-ray Imaging Dataset for Multiple Cardio-respiratory Diseases in Ethiopia (Afro Chest X-ray for short) is a project funded by the LacunaFund whose aim is to close the gap in health disparities by fostering interdisciplinary collaborations that create, expand, or aggregate labeled training and evaluation datasets.`, // Put what this project do, and what problem it solve
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
    images: [],
  },
  {
    id: 4,
    category: "Web Application", // Web, Mobile, Data, Machine Learning,
    sub_category: "Health", // Health, E-commerce, Real Estate
    title: "DEMER Healthcare HR",
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
];
