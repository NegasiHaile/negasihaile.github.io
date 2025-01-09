import React from "react";
import Link from "next/link";
import ProjectsList from "@/components/projects";
import Publication from "@/components/publication";
import { publications } from "@/data/publications";
import ImagesSlider from "@/components/image-slider";
import {
  Testmonial_0,
  Testmonial_1,
  Testmonial_2,
  Testmonial_3,
  Testmonial_4,
} from "@/utils/images";

const Home = () => {
  // const list = [
  //   {
  //     description:
  //       "✅ I’m a JavaScript full-stack developer and Data Scientist.",
  //     sublists: [],
  //   },
  //   {
  //     description:
  //       "🌱 I focus on Web based AI Solutions and Digital Healthcare Transformation.",
  //     sublists: [],
  //   },
  //   {
  //     description: "🏋️ I’m currently working on Afro Chest X-ray dataset.",
  //     sublists: [],
  //   },
  //   {
  //     description:
  //       "🏩 Previously I worked in Diabetes Intervention System, Visualizing Ambulatory Glucose profile, and Healthcare Data Managment Saas",
  //     sublists: [],
  //   },
  //   {
  //     description: "🛠️ Tech Stack:",
  //     sublists: [
  //       {
  //         title: "Languages",
  //         description:
  //           "Python, C#, and JavaScript (React JS, Node JS, Express JS, Nest JS).",
  //         sublists: [],
  //       },
  //       {
  //         title: "Database",
  //         description: "SQL, PostgreSQL, MySQL, and MongoDB.",
  //         sublists: [],
  //       },
  //       {
  //         title: "Cloud",
  //         description: "Azure, Google Cloud, AWS.",
  //         sublists: [],
  //       },
  //       {
  //         title: "Data Science",
  //         description:
  //           "Pandas, NumPy, TensorFlow, PyTorch, Hugging Face Transformers.",
  //         sublists: [],
  //       },
  //     ],
  //   },
  // ];

  const pinnedPublications = publications.filter((project) => project.pinned);
  return (
    <div className="w-full space-y-5">
      {/* OVERVIEW */}
      <div className="rounded pb-10 space-y-3">
        {/* WELCOME SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center pb-2 border-b w-full">
          <p className="text-sm opacity-85 text-center">
            Software Engineer | Data Scientist | Digital Healthcare Solutions |
            Health AI
          </p>
          {/* <p className="font-bold text-2xl">Negasi Haile A.</p> */}
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p className="md:text-justify">
            I&apos;m a software engineer with 4 years of experience in
            developing enterprise-level applications, mainly focused on digital
            healthcare solutions. My recent work includes, Implementing
            Ambulatory Glucose Profile (AGP) reports which visualize complex
            glucose data from CGM devices, and building a Diabetes Intervention
            System, a healthcare data server management dashboard, and an HR
            system for healthcare institutions.
            <br />
            <br />
            And, as a data scientist with more than 2 years of part-time
            experience, my background includes processing medical images (X-ray,
            CT, MRI) and radiology reports, visualizing glucose pattern
            insights, and creating baseline models. Additionally, I evaluated
            machine translation systems with patient discharge prescriptions and
            provided feedback to improve system performance.
            <br />
            <br />
            This exposure has deepened my interest in Digital Healthcare
            Transformation. I aim to improve healthcare delivery and physician
            decision-making supports by analyzing healthcare data with advanced
            machine learning techniques and digitalization solutions.
          </p>
        </div>
      </div>

      {/* PINNED PUBLICATIONS */}
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <p className="uppercase font-bold">Pinned Publications</p>
          <Link
            href={"/publications"}
            className="text-blue-500"
            title="See all projects"
          >
            See all publications
          </Link>
        </div>
        {pinnedPublications.map((item, i) => {
          return <Publication key={i} publication={item} />;
        })}
      </div>

      {/* PINNED SECTIONS */}
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <p className="uppercase font-bold">Pinned Projects</p>
          <Link
            href={"/projects"}
            className="text-blue-500"
            title="See all projects"
          >
            See all projects
          </Link>
        </div>
        <ProjectsList display="pinned" />
      </div>

      {/* TESTMONIAL */}
      <div className="space-y-2">
        <p className="font-bold uppercase">Upwork Testmonials</p>
        <ImagesSlider
          images={[
            Testmonial_0,
            Testmonial_1,
            Testmonial_2,
            Testmonial_3,
            Testmonial_4,
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
