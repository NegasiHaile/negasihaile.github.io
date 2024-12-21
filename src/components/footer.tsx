import Link from "next/link";
// import Script from "next/script";
import { social_accounts } from "@/data/social_accounts";

const Footer = () => {
  return (
    <footer className="flex row-start-3 w-full gap-6 py-12 flex-wrap items-center justify-evenly md:justify-between px-2">
      {social_accounts.map((account, i) => {
        return (
          <Link
            key={i}
            className="flex items-center gap-1 hover:underline hover:underline-offset-4 rounded-full p-2 border border-transparent hover:border-gray-500/70"
            href={account.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {account.icon}
          </Link>
        );
      })}
      {/* <div className="block w-32 h-32 bg-blue-500 relative">
        <Script
          id="clstr_globe"
          src="//clustrmaps.com/globe.js?cl=ffffff&w=80&t=n&d=d8TZolWdey3PKPhW4zQr5P9Eo13CRY7aqhQDwreSp4Y"
          strategy="afterInteractive"
        />
      </div> */}
      <div className="block w-32 h-32">
        <script
          type="text/javascript"
          id="clstr_globe"
          src="//clustrmaps.com/globe.js?cl=ffffff&w=120&t=n&d=d8TZolWdey3PKPhW4zQr5P9Eo13CRY7aqhQDwreSp4Y"
        ></script>
      </div>
    </footer>
  );
};

export default Footer;
