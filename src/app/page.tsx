import React from "react";
import Link from "next/link";
import ProjectsList from "@/components/projects";
import Publication from "@/components/publication";
import { publications } from "@/data/publications";
import Testmonial from "@/components/testmonial";

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
    <div className="w-full">
      {/* OVERVIEW */}
      <div className="md:border rounded md:p-5 pb-10 space-y-5 my-5">
        {/* WELCOME SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-2 border-b w-full">
          <p className="text-sm opacity-85 text-center">
            Full-stck Dev&apos; & Data Scientist | Digital Healthcare Solutions
            | Health AI
          </p>
          {/* <p className="font-bold text-2xl">Negasi Haile A.</p> */}
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p className="text-justify">
            A full-stack developer with 5 years of experience, played a key role
            in developing enterprise-level applications, including digital
            health solutions like
            <b> Continuous Glucose Monitoring (CGM)</b>, visualization with
            <b> Ambulatory Glucose Profile (AGP)</b> report,
            <b> Diabetes Intervention System </b> and healthcare data server
            management dashboard. And, as a data scientist, my experience
            involves processing DICOM images of X-ray, CT, and MRI, creating
            baseline ML models, and evaluating translation systems with a
            patient discharge prescription. This exposure has motivated me to
            focus on digital healthcare transformation and AI solutions.
            <br />
            <br />
            👯 I&apos;m obsessed with exploring healthcare data and improve
            patient outcomes!
            {/* I&apos;m passionate about leveraging data and technology to
            revolutionize healthcare and improve patient outcomes. */}
          </p>

          {/* <ul className="list-disc space-y-2 pl-10">
            {list.map((listItem, i) => {
              return (
                <li key={`main_list_${i}`}>
                  {listItem.description}
                  {listItem?.sublists.length > 0 && (
                    <ul className="list-disc space-y-2 pl-10">
                      {listItem?.sublists.map((sublist, si) => (
                        <li key={`sublist_${i}_${si}`}>
                          {sublist.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>

      {/* PINNED SECTIONS */}
      <div className="w-full space-y-2 my-5">
        <div className="flex justify-between items-center">
          <p className="uppercase">Pinned Projects</p>
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
      <div className="w-full space-y-2 my-10">
        <div className="flex justify-between items-center">
          <p className="uppercase">Pinned Publications</p>
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
      <Testmonial />
    </div>
  );
};

export default Home;
