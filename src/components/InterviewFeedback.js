export const InterviewFeedback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-6 bg-neutral-800">
      <div className="md:col-span-2 mb-3">
        <p className="font-bio text-4xl font-bold text-white text-center">
          Recent Mock Technical Interviews
        </p>
      </div>
      <div className="p-2">
        <a href="https://api.skilledinc.com/report-card/8904" target="new">
          <img
            src="/images/interviews/interview_1.jpg"
            alt="5 out of 5 React mock technical interview with Grace Shaw"
            className="rounded h-64 ml-auto mr-auto"
          />
        </a>
      </div>
      <div className="p-2">
        <a href="https://api.skilledinc.com/report-card/7755" target="new">
          <img
            src="/images/interviews/interview_2.jpg"
            alt="4 out of 5 React mock technical interview with Adam Meadows"
            className="rounded h-64 ml-auto mr-auto"
          />
        </a>
      </div>
    </div>
  );
};
