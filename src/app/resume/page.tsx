import ResumePDF from "./resumen_pdf.mdx";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resume | Negasi Haile Abadi - Software Engineer & Data Scientist",
  description:
    "Resume of Negasi Haile Abadi (Negasi Haile): software engineer and data scientist with experience in Health AI, digital healthcare, NLP, medical imaging, and full-stack development.",
  path: "/resume/",
  keywords: [
    "Negasi Haile Abadi resume",
    "Negasi Haile CV",
    "software engineer resume",
    "data scientist resume",
  ],
});

export default function Page() {
  return (
    <div className="prose dark:prose-invert max-w-none ">
      <ResumePDF />
    </div>
  );
}
