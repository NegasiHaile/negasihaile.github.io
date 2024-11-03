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
    <main className="w-full px-5 py-2">
      {/* OVERVIEW */}
      <div className="border rounded-md p-5 pb-10 space-y-5">
        {/* WELCOME SECTION */}
        <div className="py-2 border-b w-full">
          <p className="font-bold text-2xl">Negasi Haile</p>
        </div>

        {/* PROFILE SECTIONS*/}
        <div className="space-y-5">
          <p>
            I'm passionate about leveraging data and technology to revolutionize
            healthcare and improve patient outcomes.
          </p>

          <ul className="list-disc space-y-2 pl-10">
            {list.map((list, i) => {
              return (
                <>
                  <li key={i}>{list.description}</li>
                  {list?.sublists.length > 0 && (
                    <ul key={`${i}_sub`} className="list-disc space-y-2 pl-10">
                      {list?.sublists.map((sublist, si) => {
                        return (
                          <li key={si + `_` + sublist.title}>
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
    </main>
  );
};

export default Main;
