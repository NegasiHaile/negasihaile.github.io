import type { Metadata } from "next";

export const SITE_URL = "https://negasihaile.github.io";

export const PROFILE_IMAGE_PATH = "/profile-pic.png";
export const PROFILE_IMAGE_URL = `${SITE_URL}${PROFILE_IMAGE_PATH}`;

export const OG_IMAGE = {
  url: PROFILE_IMAGE_URL,
  width: 426,
  height: 585,
  type: "image/png" as const,
  alt: "Negasi Haile Abadi - Software Engineer & Data Scientist",
};

export const PERSON = {
  fullName: "Negasi Haile Abadi",
  givenName: "Negasi",
  familyName: "Abadi",
  additionalName: "Haile",
  alternateNames: ["Negasi Haile", "Negasi Abadi"],
  title: "Software Engineer & Data Scientist",
  tagline:
    "Software Engineer | Data Scientist | Researcher | Digital Healthcare Solutions | Health AI | NLP",
  description:
    "Negasi Haile Abadi is a software engineer and data scientist specializing in digital healthcare, Health AI, NLP, medical imaging, and machine translation for low-resource languages. Portfolio of projects, publications, and career experience.",
  shortDescription:
    "Software engineer and data scientist building Health AI, NLP, and digital healthcare solutions.",
  email: "negasihaile.abadi@gmail.com",
  image: PROFILE_IMAGE_URL,
  googleSiteVerification: "14HE0bq4zM6LkjiMMXIEkEoTL8m7c_zs0BSbTnczyh0",
  knowsAbout: [
    "Software Engineering",
    "Data Science",
    "Digital Healthcare",
    "Health AI",
    "Natural Language Processing",
    "Medical Imaging",
    "Machine Translation",
    "Continuous Glucose Monitoring",
    "Chest X-ray Analysis",
    "React",
    "Python",
    "NestJS",
    "PyTorch",
  ],
  sameAs: [
    "https://www.linkedin.com/in/negasi-haile-abadi/",
    "https://github.com/NegasiHaile",
    "https://scholar.google.com/citations?user=mt44ErMAAAAJ&hl=en",
    "https://x.com/NegasiHaileA",
    "https://www.upwork.com/freelancers/~01556d2b924254de6d",
  ],
  alumniOf: {
    name: "Mekelle University",
    description: "Bachelor of Science in Information Systems",
  },
} as const;

export const DEFAULT_KEYWORDS = [
  "Negasi Haile Abadi",
  "Negasi Haile",
  "Negasi Abadi",
  "Negasi Haile software engineer",
  "Negasi Haile data scientist",
  "Health AI",
  "digital healthcare",
  "NLP",
  "medical imaging",
  "machine translation",
  "Afro Chest X-ray",
  "portfolio",
];

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image = PERSON.image,
  noIndex = false,
}: PageSeoOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const ogImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const isProfileImage =
    ogImageUrl === PROFILE_IMAGE_URL || image === PROFILE_IMAGE_PATH;

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    authors: [{ name: PERSON.fullName, url: SITE_URL }],
    creator: PERSON.fullName,
    publisher: PERSON.fullName,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: `${PERSON.fullName} | Portfolio`,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImageUrl,
          width: isProfileImage ? OG_IMAGE.width : 1200,
          height: isProfileImage ? OG_IMAGE.height : 630,
          type: isProfileImage ? OG_IMAGE.type : undefined,
          alt: isProfileImage
            ? OG_IMAGE.alt
            : `${PERSON.fullName} - ${PERSON.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          alt: isProfileImage
            ? OG_IMAGE.alt
            : `${PERSON.fullName} - ${PERSON.title}`,
        },
      ],
      creator: "@NegasiHaileA",
    },
    verification: {
      google: PERSON.googleSiteVerification,
    },
    icons: {
      icon: "/favicon.ico",
      apple: PROFILE_IMAGE_PATH,
    },
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.fullName,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    additionalName: PERSON.additionalName,
    alternateName: PERSON.alternateNames,
    url: SITE_URL,
    image: PERSON.image,
    email: `mailto:${PERSON.email}`,
    jobTitle: PERSON.title,
    description: PERSON.description,
    knowsAbout: PERSON.knowsAbout,
    sameAs: PERSON.sameAs,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PERSON.alumniOf.name,
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: `${PERSON.fullName} - Portfolio`,
    alternateName: [PERSON.fullName, ...PERSON.alternateNames],
    url: SITE_URL,
    description: PERSON.description,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    name: `${PERSON.fullName} - Professional Portfolio`,
    description: PERSON.description,
    url: SITE_URL,
    mainEntity: { "@id": `${SITE_URL}/#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export const homeMetadata = createPageMetadata({
  title: `${PERSON.fullName} | ${PERSON.title}`,
  description: PERSON.description,
  path: "/",
});
