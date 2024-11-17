import Link from "next/link";
import React from "react";

const Main = () => {
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
    <main className="w-full space-y-12">
      {/* OVERVIEW */}
      <div className="border rounded-md p-5 pb-10 space-y-5">
        {/* WELCOME SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-2 border-b w-full">
          <p className="font-bold text-2xl">Negasi Haile</p>
          <p className="text-sm opacity-85 text-center">
            Full-stck Dev'| Digital Healthcare Solutions | Health AI | NLP
          </p>
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p>
            I'm passionate about leveraging data and technology to revolutionize
            healthcare and improve patient outcomes.
          </p>

          <ul key="my-works-list" className="list-disc space-y-2 pl-10">
            {list.map((list, i) => {
              return (
                <>
                  <li key={i}>{list.description}</li>
                  {list?.sublists.length > 0 && (
                    <ul key={`${i}_sub`} className="list-disc space-y-2 pl-10">
                      {list?.sublists.map((sublist, si) => {
                        return (
                          <li key={si + `_mini_sub_` + sublist.title}>
                            {sublist.description}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
      {/* PROJECTS SECTIONS */}
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <p>Pinned Projects</p>
          <Link
            href={"/"}
            className="text-blue-500 capitalize"
            title="See all projects"
          >
            See all projects
          </Link>
        </div>
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          {/* PROJECT */}
          <div className="w-full border rounded-md p-3 min-h-24"></div>
          <div className="w-full border rounded-md p-3 min-h-24"></div>
          <div className="w-full border rounded-md p-3 min-h-24"></div>
          <div className="w-full border rounded-md p-3 min-h-24"></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
