import { social_accounts } from "@/data/social_accounts";
import { ProfilePic } from "@/utils/images";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="w-full md:w-1/4 my-5 flex md:block">
      {/* IMAGE */}
      {/* <div className="w-full flex justify-center  rounded-lg">
        <Image
          src={ProfilePic}
          alt="Profile pick"
          width={280}
          height={300}
          className=" rounded-xl"
        />
      </div> */}

      <div className="w-full flex justify-center">
        <div
          className=" w-36 h-48 md:w-[280px] md:h-[335px] flex justify-center items-center rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${ProfilePic})`,
          }}
        ></div>
      </div>
      <div className="flex w-full md:justify-center">
        <div className=" row-start-3 w-fit space-y-2 md:space-y-5 md:py-5 items-center px-3">
          {social_accounts.map((account, i) => {
            // if (i > 4) return null;
            return (
              <Link
                key={i}
                className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                href={account.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {account.icon}
                <span className="">→ {account.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
