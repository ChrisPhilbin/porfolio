import React from "react";

const SocialIcons = () => {
  return (
    <div>
      <a href="">
        <img
          src="/images/social_icons/facebook_icon.png"
          className="inline m-1 w-8 h-8"
          alt="Go to Chris' Facebook profile"
        />
      </a>
      <a href="https://www.github.com/ChrisPhilbin">
        <img
          src="/images/social_icons/github_icon.png"
          className="inline m-1 w-8 h-8"
          alt="Go to Chris' Github profile"
        />
      </a>
      <a href="https://www.linkedin.com/in/chris-philbin">
        <img
          src="/images/social_icons/linkedin_icon.png"
          className="inline m-1 w-8 h-8"
          alt="Go to Chris' LinkedIn profile"
        />
      </a>
      <a href="">
        <img
          src="/images/social_icons/resume_icon.png"
          className="inline w-8 h-8"
          alt="View Chris' resume"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
