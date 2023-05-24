import React from "react";
const jobList = [
  {
    name: "Interventional Cardiologist",
    location: "New York City, USA",
    postedOn: "25 May",
    status: "Published",
    applied: 98,
    jobViews: 128,
    subscription: "free",
    days: 2,
  },
  {
    name: "Interventional Cardiologist",
    location: "New York City, USA",
    postedOn: "25 May",
    status: "Published",
    applied: 98,
    jobViews: 128,
    subscription: "free",
    days: 7,
  },
  {
    name: "Interventional Cardiologist",
    location: "New York City, USA",
    postedOn: "25 May",
    status: "Published",
    applied: 98,
    jobViews: 128,
    subscription: "premium",
    days: 30,
  },
  {
    name: "Interventional Cardiologist",
    location: "New York City, USA",
    postedOn: "25 May",
    status: "Published",
    applied: 98,
    jobViews: 128,
    subscription: "free",
    days: 7,
  },
  {
    name: "Interventional Cardiologist",
    location: "New York City, USA",
    postedOn: "25 May",
    status: "Published",
    applied: 98,
    jobViews: 128,
    subscription: "free",
    days: 7,
  },
];

const ActiveJobs = () => {
  return (
    <div
      id="jobs"
      className="lg:mx-[114px] md:mx-[50px] xs:mx-[20px] flex flex-col"
    >
      <div className="flex flex-row justify-between">
        <p className="text-base font-bold text-[#364154]">Active Jobs</p>
        <div className="border border-grayBorder py-[4px] px-[9px] rounded-md">
          <label for="jobSort" className="font-bold text-[13px] text-primary">
            Sort By:
          </label>
          <select
            name="jobSort"
            id="jobSort"
            className="text-[13px] font-[400] bg-transparent focus:outline-none"
          >
            <option value="recent" selected>
              Recent
            </option>
            <option value="popular">Popular</option>
            <option value="featured">Featured</option>
            <option value="remote">Remote</option>
          </select>
        </div>
      </div>
      <div className="mt-[14px] md:mb-[42px] xs:mb-[28px]">
        {jobList.map((jobData) => {
          return (
            <div className="w-full lg:h-[115px] md:h-[180px]  sm:h-[200px]  xs:h-[270px] mb-[15px] border border-grayBorder border-l-[6px] border-l-[#B9ECD4] rounded-md px-[20px] flex lg:flex-row xs:flex-col sm:gap-y-[20px] xs:gap-y-[24px] xs:justify-center items-center">
              <div className="w-6.5/12 flex flex-row items-center w-full">
                <div className="w-6/12 flex flex-col">
                  <p className="font-bold md:text-lg xs:text-base text-[#6390DF]">
                    {jobData.name}
                  </p>

                  <p className="font-bold md:text-[13px] xs:text-[11px]">
                    Location: {jobData.location}
                  </p>
                  <div className="flex sm:flex-row xs:flex-col gap-y-[5px] gap-x-[30px]">
                    <p className="font-bold md:text-[13px] xs:text-[11px]">
                      Posted on: {jobData.postedOn}
                    </p>
                    <p className="font-bold md:text-[13px] xs:text-[11px]">
                      Status: {jobData.status}
                    </p>
                  </div>
                </div>
                <div className="flex md:flex-row items-center xs:flex-col gap-y-[8px] w-6/12">
                  <div className="md:w-4/12 xs:w-full">
                    {" "}
                    <p className="font-bold text-[14px] text-center">
                      {jobData.applied} Applied
                    </p>
                  </div>
                  <div className="md:w-8/12 xs:w-full">
                    <p className="font-bold text-[14px] text-center">
                      {jobData.jobViews} Job Views
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-5.5/12 flex flex-row items-center w-full xs:border-t md:border-0">
                <div className="w-7/12 flex flex-col md:px-[30px] xs:px-[10px] items-center xs:pt-[8px]">
                  <div
                    className={`h-[24px] ${
                      jobData.subscription === "free"
                        ? jobData.days >= 3
                          ? "bg-[#54BDA52E]"
                          : "bg-[#E86750]"
                        : "bg-[#EBCA241A]"
                    }  bg-opacity-10 rounded-xl flex items-center mb-[7px]`}
                  >
                    <p
                      className={`text-center font-bold text-[12px] ${
                        jobData.subscription === "free"
                          ? jobData.days >= 3
                            ? "text-[#458677]"
                            : "text-[#E86750]"
                          : "text-[#C4A923]"
                      } px-4 capitalize`}
                    >
                      {jobData.subscription} • {jobData.days} Days{" "}
                      {jobData.subscription === "free" ? "Left" : ""}
                    </p>
                  </div>
                  <p className="text-center font-bold text-[12px]">
                    {jobData.subscription === "free"
                      ? " Get more application by extending this job post."
                      : "You are getting better visibility as this is a premium job post."}

                    {jobData.subscription === "free" && (
                      <span className="text-[#54BDA5]"> Go Premium</span>
                    )}
                  </p>
                </div>
                <div className="w-5/12 flex sm:flex-row xs:flex-col gap-[5px]">
                  <button className="bg-[#F5F8FE] py-1 px-0.5 md:w-[123px] rounded-md">
                    <p className="text-center font-bold text-[13px] text-[#6390DF]">
                      See Applications
                    </p>
                  </button>
                  <button className="bg-[#F4F4F4] py-1 px-0.5  rounded-md min-w-[86px]">
                    <select
                      className="text-center font-bold text-[13px] text-[#7B7B7B] bg-transparent focus:outline-none"
                      defaultValue="actions"
                    >
                      <option value="actions" disabled>
                        Actions
                      </option>
                      <option value="view">View</option>
                      <option value="save">Save</option>
                    </select>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveJobs;
