import React from "react";
import { BsEnvelopeFill, BsPersonFill, BsStarFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
const headerData = [
  {
    name: "Active Jobs",
    value: 180,
    icon: IoIosCheckmarkCircle,
    id: 1,
    color: "text-[#54BDA5]",
  },
  {
    name: "New Application",
    value: 180,
    icon: BsEnvelopeFill,
    id: 2,
    color: "text-[#ECD3B9]",
  },
  {
    name: "Candidate To Be Reviewed",
    value: 22,
    icon: BsPersonFill,
    id: 3,
    color: "text-[#ECB9B9]",
  },
  {
    name: "Shortlisted",
    value: 178,
    icon: BsStarFill,
    id: 4,
    color: "text-[#8C97AB]",
  },
];

const Header = () => {
  return (
    <div id="postjob" className="mt-[70px] bg-white relative">
      <div className="h-[114px] bg-[#122443] mb-[30px]">
        <div className="lg:mx-[114px] md:mx-[80px]  xs:mx-[50px] py-[25px] flex md:flex-row xs:flex-col xs:gap-y-3 md:gap-y-0 items-center justify-between">
          <p className=" text-white md:text-2xl sm:text-lg xs:text-base font-bold">
            Hello, Paramedic Medical Supplies
          </p>
          <button className="w-[118px] h-[32px] bg-[#54BDA5] text-white font-bold text-[13px] text-center rounded-sm">
            Post A Job
          </button>
        </div>
      </div>
      <div className="lg:mx-[114px] md:mx-[80px] xs:mx-[20px] xs:mt-[20px] md:absolute md:inset-x-[1px] md:top-[81px] flex sm:flex-row xs:flex-col gap-x-[20px]">
        {headerData.map(
          ({ id, name, color: textColor, value, icon: Icon }) => {
            return (
              <div
                key={id}
                className={`flex flex-col justify-center items-center sm:basis-1/4 xs:mb-[20px] h-[112px] border bg-white border-grayBorder border-b-[7px] ${
                  id === 1
                    ? "border-b-[#54BDA5]"
                    : id === 2
                    ? "border-b-[#ECD3B9]"
                    : id === 3
                    ? "border-b-[#ECB9B9]"
                    : " border-b-[#8C97AB]"
                } rounded-md`}
              >
                <p className="text-primary font-bold text-[22px] mb-[8px]">
                  {value}
                </p>
                <div className="flex md:flex-row sm:flex-col xs:flex-row gap-[10px] items-center mx-1">
                  <Icon
                    className={`${textColor} w-[16px] h-[16px] rounded`}
                  />
                  <p className="text-center font-bold md:text-[15px] sm:text-[13px] text-[#5E6676]">{name}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Header;
