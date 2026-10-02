import localFont from "next/font/local";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import StructuredData from "@/components/structured-data";
import {
  getPersonSchema,
  getProfilePageSchema,
  getWebSiteSchema,
  homeMetadata,
} from "@/lib/seo";
import "./globals.css";

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

export const metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData
          data={[getPersonSchema(), getWebSiteSchema(), getProfilePageSchema()]}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="w-full px-5 h-full sm:w-[90%] md:w-[95%] lg:w-[75%] font-[var(--font-geist-sans)]">
          <NavBar />
          <div className="w-full block md:flex space-y-5 md:space-y-0 md:space-x-5 md:py-5">
            <Profile />
            <main className="w-full min-w-0 pb-y0">
              {children}
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
