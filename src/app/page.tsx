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
      <div className="md:border rounded md:p-5 pb-10 space-y-5">
        {/* WELCOME SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-2 border-b w-full">
          <p className="text-sm opacity-85 text-center">
            Full-stack Dev&apos; & Data Scientist | Digital Healthcare Solutions
            | Health AI
          </p>
          {/* <p className="font-bold text-2xl">Negasi Haile A.</p> */}
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p className="md:text-justify">
            I&apos;m full-stack developer and Data Scicntist with 4 years of
            experience, played a key role in developing enterprise-level
            <b> digital health solutions </b>
            (implemented data visualization with Ambulatory Glucose Profile
            (AGP) report, Diabetes Intervention System, healthcare data server
            management dashboard), and
            <b> Healthcare ERP systems</b>. As a data scientist, my experience
            involves processing medical data (X-ray, CT, and MRI), creating
            baseline ML models, and evaluating translation systems with a
            patient discharge prescription.
            <br />
            <br />
            My primary interest lies in improving patient outcomes by
            revolutionizing healthcare decision support through analyzing
            healthcare data with advanced machine learning techniques and
            digitalization solutions.
          </p>
        </div>
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
