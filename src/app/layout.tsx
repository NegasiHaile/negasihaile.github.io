import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head"; // Import Head for managing meta tags

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
  title: "Negasi Haile",
  description:
    "Negasi Haile, Full-stack Developer, Data Scientist, Digital Healthcare Transformation, AI solutions",
  openGraph: {
    title: "Negasi Haile",
    description:
      "Negasi Haile, Full-stack Developer, Data Scientist, Digital Healthcare Transformation, AI solutions",
    url: "https://www.negasahaile.com", // Change to your site's URL
    images: ["/images/twitter-card.jpg"], // Provide a proper OG image for better social sharing
    type: "website",
  },
  twitter: {
    card: "Negasi Haile", // Use large image for Twitter cards
    title: "Negasi Haile",
    description:
      "Negasi Haile, Full-stack Developer, Data Scientist, Digital Healthcare Transformation, AI solutions",
    images: ["/images/twitter-card.jpg"], // Specify the image for Twitter cards
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
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        {
          <meta
            property="og:description"
            content={metadata.openGraph.description}
          />
        }
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
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[60%] p-5 font-[var(--font-geist-sans)]">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
