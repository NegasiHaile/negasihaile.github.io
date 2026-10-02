import React from "react";
import Image from "next/image";
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
  Testmonial_5,
  Testmonial_6,
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
      <div className="rounded pb-5 space-y-5">
        {/* WELCOME SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center pb-2 border-b w-full">
          <p className="text-3xl font-semibold text-center">
            Software Engineer | Data Scientist | Researcher | Health AI | NLP
          </p>
          {/* <p className="font-bold text-2xl">Negasi Haile A.</p> */}
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p className="md:text-justify">
            As I have worked in startups for the past 5+ years, my experience has
            been at the intersection of{" "}
            <b>software engineering, data processing, and NLP research</b>. As a
            software engineer, I have built enterprise-level applications
            end-to-end, from designing system architectures and implementing both
            frontend and backend components to deploying and maintaining
            production systems. My recent work includes developing a diabetes
            intervention system, standardizing Continuous Glucose Monitoring
            (CGM) data to FHIR, implementing HIPAA-compliant systems like{" "}
            <Link
              href="https://syncagp.vercel.app/"
              target="_blank"
              className="text-blue-500"
            >
              Ambulatory Glucose Profile (AGP) reports
            </Link>
            , and designing language technology platforms for Machine
            Translation, Automatic Speech Recognition, and Text-to-Speech.
            <br />
            <br />
            <b>As a data scientist</b>, I have worked across the full data lifecycle,
            from coordinating and leading field data collection teams to
            processing, annotating, validating, and preparing datasets for
            annotation and machine learning. This includes healthcare data such
            as large-scale chest X-ray images and clinical reports, as well as
            NLP data such as text corpora and speech recordings.
            <br />
            <br />
            <b>As a researcher</b>, I have evaluated state-of-the-art NLP models,
            analyzing their capabilities, limitations, and failure modes across
            different domains, mainly healthcare. I have designed benchmarks,
            conducted systematic model evaluations, and provided targeted
            feedback and datasets to address identified performance gaps.
            Moreover, I have designed a language technology evaluation and
            leaderboard that also periodically benchmarks new and uncontaminated
            evaluation datasets across multiple domains like healthcare
            (patient-doctor communication).
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <p className="uppercase font-bold">GitHub contiribution</p>
        <Image
          src="https://ghchart.rshah.org/negasihaile"
          alt="GitHub Contributions"
          width={1200}
          height={200}
          className="w-full h-auto border rounded p-2"
        />
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

      {/* PINNED PROJECTS */}
      <section
        aria-label="Negasi Haile's pineed projects"
        className="w-full space-y-2 py-5"
      >
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
      </section>

      {/* TESTMONIAL */}
      <div className="w-full min-w-0 overflow-hidden">
        <p className="font-bold uppercase">UpWork Testmonials</p>
        <ImagesSlider
          images={[
            Testmonial_0,
            Testmonial_1,
            Testmonial_2,
            Testmonial_3,
            Testmonial_4,
            Testmonial_5,
            Testmonial_6,
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
