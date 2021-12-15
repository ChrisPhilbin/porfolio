import React from "react";

const SideProjects = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 py-4 bg-gradient-to-r from-indigo-900 to-indigo-800">
      <div class="bg-white rounded-xl w-4/5 ml-auto mr-auto my-4 p-4 divide-y divide-gray-400">
        <div class="pb-2">
          <p class="text-xl font-bio font-bold text-gray-700 text-center">
            Does Rover Live
          </p>
        </div>
        <div class="pt-2">
          <p class="font-bio text-gray-700 tracking-wide">
            Mobile-first Vue front end using TailwindCSS for styling paired with
            a Node.js/Express backend for the API layer. Crowd souces data to
            determine whether or not a dog in a searched for movie lives or
            dies.
          </p>
          <span class="block text-center">
            <a
              href="https://github.com/ChrisPhilbin/does-rover-live"
              target="blank"
            >
              <button class="mt-2 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Github
              </button>
            </a>
            <a href="https://www.doesroverlive.com" target="blank">
              <button class="mt-2 ml-3 h-14 w-28 bg-projectButton rounded-md text-xl text-white font-bio">
                Deployed
              </button>
            </a>
          </span>
        </div>
      </div>
      <div class="bg-white rounded-xl w-4/5 ml-auto mr-auto my-4 p-4">
        <p class="text-xl font-bio font-bold text-gray-700 text-center">
          Coastal Coating
        </p>
        <p class="font-bio text-gray-700 tracking-wide">
          Website for an auto detailing business in South Carolina. Mobile-first
          Vue front end using TailwindCSS for styling. Node.js and Express for
          the backend to manage customer requests for appointments. Deployed to
          the Google Cloud Platform.
        </p>
      </div>
      <div class="bg-white rounded-xl w-4/5 ml-auto mr-auto my-4 p-4">
        <p class="text-xl font-bio font-bold text-gray-700 text-center p-4">
          Reply All Generator
        </p>
        <p class="font-bio text-gray-700 tracking-wide">
          React/Redux front end using Material-UI for styling. Paired with a
          Node.js backend with express to handle user authentication and data
          persistence to Firebase. Deployed to Google Cloud Platform.
        </p>
      </div>
    </div>
  );
};

export default SideProjects;
