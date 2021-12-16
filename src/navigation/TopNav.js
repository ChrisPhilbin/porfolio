import React from "react";
import SocialIcons from "./SocialIcons";

const TopNav = () => {
  return (
    <div className="relative block bg-gradient-to-b from-mainMenuPrimary to-mainMenuSecondary h-24 p-2">
      <p className="text-4xl mt-6 font-bio text-white font-bold">
        Meet Chris Philbin
      </p>
      <div className="hidden md:block absolute top-7 right-8">
        <SocialIcons />
      </div>
    </div>
  );
};

export default TopNav;
