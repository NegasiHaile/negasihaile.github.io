import Image from "next/image";

export default function Home() {
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
    <div className="w-full sm:w-[90%] md:w-[85] lg:w-[65%] font-[family-name:var(--font-geist-sans)]">
      <main className="w-full px-5 py-2"></main>

      <footer className="row-start-3 w-full flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          LinkedIn →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          GitHub →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Upwork →
        </a>
      </footer>
    </div>
  );
}
