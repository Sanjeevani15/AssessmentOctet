import React from "react";
import logo from "../images/logo.jpeg";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

const FooterLeftOptions = [
  { name: "Home" },
  { name: "About" },
  { name: "Contact" },
  { name: "FAQ" },
  { name: "Privacy Policy" },
  { name: "Terms & Conditions" },
];

const FooterRightOptions = [
  { name: "(+1) - 25698 89693", icon: BsTelephoneFill },
  { name: "customercare@likehire.com", icon: BsFillEnvelopeFill },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center md:h-[142px] sm:h-[260px] xs:h-[290px] w-full bg-[#F8F8FF] lg:px-[128px] md:px-[60px] sm:px-[40px] xs:px-[20px]  md:pt-[18px] md:pb-[23px]">
      <div className="w-full">
        <img src={logo} alt="logoImage" className="mt-[18px] h-[26px]" />
      </div>
      <div className="flex justify-between mt-[23px] mb-[20px]">
        <div className="flex md:flex-row xs:flex-col xs:gap-y-[4px] lg:gap-x-[31px] md:gap-x-[20px]">
          {FooterLeftOptions.map((navName) => {
            return (
              <a href="/">
                <p className="text-[#364154] text-[13px]">{navName.name}</p>
              </a>
            );
          })}
        </div>
        <div className="flex lg:flex-row xs:flex-col md:gap-x-[50px]">
          {FooterRightOptions.map(({ icon: Icon, name }) => {
            return (
              <a href="/" className="flex flex-row items-center">
                <Icon className="w-[17px] h-[15px] p-0.5 bg-[#E3E6EB] text-[#364154] rounded" />
                <p className="text-[#364154] text-[13px] ml-[10px]">{name}</p>
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex sm:flex-row xs:flex-col-reverse xs:gap-y-2 sm:justify-between xs:justify-center">
        <p className="text-[#364154] text-[12px] text-center">
          &copy; 2020 Like Hire. All rights reserved
        </p>
        <div className="flex flex-row xs:justify-center gap-x-[18px] text-[#8E959F]">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
