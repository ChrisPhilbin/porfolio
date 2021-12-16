import React from "react";
import SocialIcons from "./SocialIcons";

const TopNav = () => {
  return (
    <div className="relative block bg-gradient-to-b from-mainMenuPrimary to-mainMenuSecondary h-24 p-2">
      <p className="text-3xl mt-6">Meet Chris</p>
      <div className="absolute top-7 right-8">
        <SocialIcons />
      </div>
    </div>
  );
};

export default TopNav;
