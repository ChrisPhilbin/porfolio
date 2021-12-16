import React from "react";

const SideProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-4 bg-gradient-to-r from-indigo-900 to-indigo-800">
      <div className="md:col-span-3">
        <p className="font-bio text-4xl font-bold text-white text-center">
          My Side Projects
        </p>
      </div>
      <div className="relative bg-slate-100 rounded-xl w-4/5 ml-auto mr-auto my-4 p-4 divide-y divide-gray-400">
        <div className="pb-2">
          <p className="text-xl font-bio font-bold text-gray-700 text-center">
            Does Rover Live
          </p>
        </div>
        <div className="pt-2">
          <p className="font-bio text-gray-700 tracking-wide">
            Mobile-first Vue front end using TailwindCSS for styling paired with
            a Node.js/Express backend for the API layer. Crowd souces data to
            determine whether or not a dog in a searched for movie lives or
            dies.
          </p>
          <div className="h-1 md:h-12"></div>
          <span className="block text-center">
            <a
              href="https://github.com/ChrisPhilbin/does-rover-live"
              target="blank"
            >
              <button className="mt-2 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Github
              </button>
            </a>
            <a href="https://www.doesroverlive.com" target="blank">
              <button className="mt-2 ml-3 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Deployed
              </button>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-slate-100 rounded-xl w-4/5 ml-auto mr-auto my-4 p-4 divide-y divide-gray-400">
        <div className="pb-2">
          <p className="text-xl font-bio font-bold text-gray-700 text-center">
            Coastal Coating
          </p>
        </div>
        <div className="pt-2">
          <p className="font-bio text-gray-700 tracking-wide">
            Website for an auto detailing business in South Carolina.
            Mobile-first Vue front end using TailwindCSS for styling. Node.js
            and Express for the backend to manage customer requests for
            appointments. Deployed to the Google Cloud Platform.
          </p>
          <span className="block text-center">
            <a
              href="https://github.com/ChrisPhilbin/coastal-coating"
              target="blank"
            >
              <button className="mt-2 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Github
              </button>
            </a>
            <a href="https://coastal-coating.web.app" target="blank">
              <button className="mt-2 ml-3 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Deployed
              </button>
            </a>
          </span>
        </div>
      </div>
      <div className="bg-slate-100 rounded-xl w-4/5 ml-auto mr-auto my-4 p-4 divide-y divide-gray-400">
        <div className="pb-2">
          <p className="text-xl font-bio font-bold text-gray-700 text-center">
            Reply All Generator
          </p>
        </div>
        <div className="pt-2">
          <p className="font-bio text-gray-700 tracking-wide">
            React/Redux front end using Material-UI for styling. Paired with a
            Node.js backend with express to handle user authentication and data
            persistence to Firebase. Deployed to Google Cloud Platform.
          </p>
          <div className="h-1 md:h-12"></div>
          <span className="block text-center">
            <a
              href="https://github.com/ChrisPhilbin/ReactReplyAllGenerator"
              target="blank"
            >
              <button className="mt-2 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Github
              </button>
            </a>
            <a href="https://replyallgenerator.web.app/login" target="blank">
              <button className="mt-2 ml-3 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Deployed
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideProjects;
