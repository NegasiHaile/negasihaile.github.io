import localFont from "next/font/local";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head"; // Import Head for managing meta tags
import Profile from "@/components/profile";
import "./globals.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Negasi Haile - Software Engineer, Data Scientist",
  description:
    "Software Engineer & Data Scientist focused on delivering enterprise-level applications, data-driven insights, and AI solutions.",
  openGraph: {
    title: "Negasi Haile",
    description:
      "Software Engineer & Data Scientist focused on delivering enterprise-level applications, data-driven insights, and AI solutions.",
    url: "https://negasihaile.github.io", // Change to your site's URL
    images: [
      "https://res.cloudinary.com/dshwnppvx/image/upload/v1732745596/portfolio/assests/portfolio_n7liaq.jpg",
    ], // Provide a proper OG image for better social sharing
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Corrected Twitter card type
    title: "Negasi Haile",
    description:
      "Software Engineer & Data Scientist focused on delivering enterprise-level applications, data-driven insights, and AI solutions.",
    images: [
      "https://res.cloudinary.com/dshwnppvx/image/upload/v1732745596/portfolio/assests/portfolio_n7liaq.jpg",
    ], // Specify the image for Twitter cards
  },
  robots: "index, follow", // Ensure that search engines are allowed to index your page
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Title and Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        {/* Canonical Link */}
        <link rel="canonical" href="https://negasihaile.github.io" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Negasi Haile",
              url: "https://negasihaile.github.io",
              jobTitle: "Software Engineer & Data Scientist",
              description:
                "Software Engineer & Data Scientist focused on digital healthcare, AI, and enterprise solutions.",
              sameAs: [
                "https://github.com/negasihaile",
                "https://www.linkedin.com/in/negasihaile",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="w-full px-5 h-full sm:w-[90%] md:w-[95%] lg:w-[75%] font-[var(--font-geist-sans)]">
          <NavBar />
          <div className="w-full block md:flex space-y-5 md:space-y-0 md:space-x-5 md:py-5">
            <Profile />
            <main className="w-full pb-y0">
              {children}
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
