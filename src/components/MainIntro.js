import * as React from "react";
import SocialIcons from "../navigation/SocialIcons";

const MainIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-w-full bg-neutral-800">
      <div className="ml-auto mr-auto pt-10">
        <img
          src="/images/chris_headshot.webp"
          className="block rounded-full mb-2"
          alt="Chris Philbin"
        />
        <p className="text-center text-4xl font-bio font-bold text-slate-200 my-4 tracking-wide">
          Hello, world!
        </p>
      </div>

      <div className="p-10">
        <p className="text-lg font-bio text-slate-200 tracking-wide">
          Hi there! I'm Chris Philbin and I am a software developer based out of
          Philadelphia who has a passion for solving real world problems using
          code. I believe in bringing in the human component into software
          development because at the end of the day teams of people create
          software for other people to use in their lives.
        </p>
        <br />

        <p className="text-lg font-bio text-slate-200 tracking-wide">
          As of late, my focus has been using front end libraries and frameworks
          such as{" "}
          <a href="https://angular.io/" target="_blank">
            Angular
          </a>
          ,{" "}
          <a href="https://reactjs.org/" target="new">
            React
          </a>
          , and{" "}
          <a href="https://vuejs.org/" target="new">
            Vue
          </a>
          , and have also recently been using the CSS framework{" "}
          <a href="https://tailwindcss.com/" target="new">
            TailwindCSS
          </a>{" "}
          for styling and it has really grown on me. My favorite framework is
          Angular because it's a "batteries included" approach to front end
          development. Check out some of my side projects below.
        </p>
        <span className="block mt-2 md:hidden">
          <SocialIcons />
        </span>
      </div>
    </div>
  );
};

export default MainIntro;
