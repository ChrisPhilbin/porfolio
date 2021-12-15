import React from "react";

const MainIntro = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 max-w-full">
      <div class="ml-auto mr-auto pt-10">
        <img
          src="/images/chris_headshot.webp"
          class="block rounded-full mb-2"
          alt="Chris Philbin"
        />
        <p class="text-center text-4xl font-bio font-bold text-slate-200 my-4 tracking-wide">
          Hello, world!
        </p>
      </div>

      <div class="p-10">
        <p class="text-lg font-bio text-slate-200 tracking-wide">
          Hi there! I'm Chris Philbin and I am a software developer who has a
          passion for solving real world problems using code. I believe in
          bringing in the human component into software development because at
          the end of the day teams of people create software for other people to
          use in their lives.
        </p>
        <br />

        <p class="text-lg font-bio text-slate-200 tracking-wide">
          As of late my focus has been using front end libraries and frameworks
          such as React and Vue, and have also recently been using the CSS
          framework TailwindCSS for styling and it has really grown on me. Check
          out some of my side projects below.
        </p>
      </div>
    </div>
  );
};

export default MainIntro;
