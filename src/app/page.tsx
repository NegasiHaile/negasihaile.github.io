import React from "react";
import Link from "next/link";
import ProjectsList from "@/components/projects";

const Home = () => {
  const list = [
    {
      description:
        "✅ I’m a JavaScript full-stack developer and Data Scientist.",
      sublists: [],
    },
    {
      description:
        "🌱 I focus on Web based AI Solutions and Digital Healthcare Transformation.",
      sublists: [],
    },
    {
      description: "🏋️ I’m currently working on Afro Chest X-ray dataset.",
      sublists: [],
    },
    {
      description:
        "🏩 Previously I worked in Diabetes Intervention System, Visualizing Ambulatory Glucose profile, and Healthcare Data Managment Saas",
      sublists: [],
    },
    {
      description: "🛠️ Tech Stack:",
      sublists: [
        {
          title: "Languages",
          description:
            "Python, C#, and JavaScript (React JS, Node JS, Express JS, Nest JS).",
          sublists: [],
        },
        {
          title: "Database",
          description: "SQL, PostgreSQL, MySQL, and MongoDB.",
          sublists: [],
        },
        {
          title: "Cloud",
          description: "Azure, Google Cloud, AWS.",
          sublists: [],
        },
        {
          title: "Data Science",
          description:
            "Pandas, NumPy, TensorFlow, PyTorch, Hugging Face Transformers.",
          sublists: [],
        },
      ],
    },
  ];
  return (
    <div className="w-full">
      {/* OVERVIEW */}
      <div className="border-x p-5 pb-10 space-y-5 my-5">
        {/* WELCOME SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-2 border-b w-full">
          <p className="text-sm opacity-85 text-center">
            Full-stck Dev&apos; & Data Scientist | Digital Healthcare Solutions
            | Health AI | NLP
          </p>
          {/* <p className="font-bold text-2xl">Negasi Haile A.</p> */}
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p>
            I&apos;m passionate about leveraging data and technology to
            revolutionize healthcare and improve patient outcomes.
          </p>

          <ul className="list-disc space-y-2 pl-10">
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
          </ul>
        </div>
      </div>

      {/* PINNED SECTIONS */}
      <div className="w-full space-y-2 my-5">
        <div className="flex justify-between items-center">
          <p>Pinned Projects</p>
          <Link
            href={"/projects"}
            className="text-blue-500 capitalize"
            title="See all projects"
          >
            See all projects
          </Link>
        </div>
        <ProjectsList display="pinned" />
      </div>
    </div>
  );
};

export default Home;
