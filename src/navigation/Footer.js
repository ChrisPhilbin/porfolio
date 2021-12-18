import * as React from "react";

export const Footer = () => {
  return (
    <div className="bg-neutral-800 text-center py-4">
      <p className="block text-lg font-bio text-slate-200 tracking-wide">
        &copy; {new Date().getFullYear()} Chris Philbin
      </p>
      <p className="block text-lg font-bio text-slate-200 tracking-wide">
        Made with ❤️ in Philadelphia, PA
      </p>
      <p className="block text-sm font-bio text-slate-200 tracking-wide">
        Powered by React/Redux/TailwindCSS |{" "}
        <a href="https://github.com/ChrisPhilbin/porfolio" target="new">
          view Github repo
        </a>
      </p>
    </div>
  );
};
