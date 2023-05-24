import React, { useState } from "react";
import navlogo from "../images/navlogo.jpeg";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import profile from "../images/profile.jpeg";

const navOptions = [
  { name: "Dashboard", id: "dashboard" },
  { name: "Jobs", id: "jobs" },
  { name: "Applicants", id: "applicants" },
  { name: "Post a Job", id: "postjob" },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [selectedNav, setSelectedNav] = useState("dashboard");
  const handleClick = (sectionId) => {
    setSelectedNav(sectionId);
    navbar && setNavbar(!navbar);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with ID '${sectionId}' does not exist.`);
    }
  };
  return (
    <nav className="w-full fixed top-0 z-50 h-[70px] bg-white">
      <div className="mx-auto  md:px-[30px] md:items-center md:flex h-full">
        <div className="flex xs:px-[30px] md:px-0 h-full items-center justify-between md:block">
          <div className=" flex h-full justify-center items-center">
            <img
              src={navlogo}
              alt="logoImage"
              className=" h-[26px] w-[114px] bg-white"
            />
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <RxCross2 className="w-6 h-6" />
              ) : (
                <BiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`bg-white flex w-full md:flex md:ml-[50px] ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="xs:border-2 xs:bg-slate-100 md:bg-white md:border-0 flex md:flex-row xs:flex-col items-center justify-between w-full">
            <div className="flex md:flex-row xs:flex-col md:gap-x-[10px] lg:gap-x-[30px] relative">
              {navOptions.map((navData) => {
                return (
                    <>
                  <div
                    onClick={() => {
                      handleClick(navData.id);
                    }}
                    key={navData.id}
                    className={`h-[68px] flex items-center cursor-pointer ${
                      selectedNav === navData.id
                        ? "border-b-[5px] border-b-[#DC832D] font-bold"
                        : "font-normal"
                    } `}
                  >
                    <p className="text-center md:text-left w-full text-[14px] text-primary px-1">
                      {navData.name}
                    </p>
                    {navData.id === "postjob" && (
                      <div className="md:block xs:hidden">
                        <div class="absolute -right-2 top-4 z-10 inline-block rounded-full bg-red-600 h-[5px] w-[5px] text-xs"></div>
                      </div>
                    )}
                  </div>
                  <hr className="md:hidden xs:block xs:w-full" />
                  </>
                );
              })}
            </div>
            <div className="flex flex-row gap-x-[30px] md:my-0 xs:my-4 items-center">
              <button className="w-[131px] h-[32px] bg-[#DC832D] text-white font-bold text-[13px] text-center rounded-sm">
                Go Unlimited
              </button>
              <div className="h-26px flex flex-row items-center gap-x-[10px]">
                <img
                  src={profile}
                  alt="profile"
                  className="inline-block h-[26px] w-[26px] rounded-full border"
                />
                <button>
                  <select
                    className="text-center font-bold text-[13px] text-primary bg-transparent focus:outline-none"
                    defaultValue="myProfile"
                  >
                    <option value="myProfile" selected>
                      My Profile
                    </option>
                    <option value="view">Logout</option>
                  </select>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
