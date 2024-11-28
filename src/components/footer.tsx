import Link from "next/link";

import { social_accounts } from "@/data/social_accounts";

const Footer = () => {
  return (
    <footer className="flex row-start-3 w-full gap-6 py-12 flex-wrap items-center justify-between px-2">
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
    </footer>
  );
};

export default Footer;
