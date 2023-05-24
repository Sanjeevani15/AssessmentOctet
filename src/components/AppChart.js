import React, { useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { day: "1", value: 10, upValue: 10 },
  { day: "2", value: 8, upValue: 8 },
  { day: "3", value: 15, upValue: 12 },
  { day: "4", value: 18, upValue: 10 },
  { day: "5", value: 6, upValue: 6 },
  { day: "6", value: 10, upValue: 10 },
  { day: "7", value: 11, upValue: 11 },
  { day: "8", value: 16, upValue: 6 },
  { day: "9", value: 9, upValue: 9 },
  { day: "10", value: 8, upValue: 5 },
  { day: "11", value: 15, upValue: 11 },
  { day: "12", value: 15, upValue: 13 },
  { day: "13", value: 12, upValue: 12 },
  { day: "14", value: 10, upValue: 10 },
  { day: "15", value: 10, upValue: 8 },
  { day: "16", value: 14, upValue: 11 },
  { day: "17", value: 13, upValue: 8 },
  { day: "18", value: 5, upValue: 7 },
  { day: "19", value: 9, upValue: 9 },
  { day: "20", value: 12, upValue: 10 },
  { day: "21", value: 11, upValue: 11 },
  { day: "22", value: 15, upValue: 9 },
  { day: "23", value: 16, upValue: 12 },
  { day: "24", value: 11, upValue: 11 },
  { day: "25", value: 8, upValue: 8 },
  { day: "26", value: 13, upValue: 13 },
  { day: "27", value: 15, upValue: 15 },
  { day: "28", value: 11, upValue: 11 },
  { day: "29", value: 9, upValue: 9 },
  { day: "30", value: 12, upValue: 12 },
];

const weeklyData = [
    { day: "1", value: 10, upValue: 10 },
    { day: "2", value: 8, upValue: 8 },
    { day: "3", value: 15, upValue: 12 },
    { day: "4", value: 18, upValue: 10 },
    { day: "5", value: 6, upValue: 6 },
    { day: "6", value: 10, upValue: 10 },
    { day: "7", value: 11, upValue: 11 }
]

const AppChart = () => {
  const [selected, setSelected] = useState("monthly");
  return (
    <div id="applicants" className="mt-[100px] bg-white lg:mx-[114px] md:mx-[50px] xs:mx-[20px] mb-[30px]">
      <div className="flex flex-row justify-between mb-[14px]">
        <p className="text-base font-bold text-[#364154]">
          Applications Received
        </p>
        <div className="flex flex-row border border-grayBorder rounded-md">
          <button
            onClick={() => {
              setSelected("weekly");
            }}
            className={`w-[70px] text-[13px] text-center border-r border-r-gray-300 ${
              selected === "weekly"
                ? "bg-[#F5F8FE] text-[#6390DF] font-bold "
                : "bg-white text-[#364154]"
            } `}
          >
            Weekly
          </button>
          <button
            onClick={() => {
              setSelected("monthly");
            }}
            className={`w-[70px] text-[13px] text-center ${
              selected === "monthly"
                ? "bg-[#F5F8FE] text-[#6390DF] font-bold"
                : "bg-white text-[#364154]"
            } `}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="border border-grayBorder">
        <ResponsiveContainer width="100%" height={222}>
          <BarChart
            width={1140}
            height={222}
            data={selected === 'monthly' ? data : weeklyData}
            barCategoryGap={selected === 'monthly' ? 10 : 40}
            margin={{ top: 25, right: 20, left: 20, bottom: 20 }}
          >
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{ fontSize: 13, fill: "#858789" }}
            />
            <Bar dataKey="value" stackId="a" fill="#94E6D4" width={17} />
            <Bar dataKey="upValue" stackId="a" fill="#EFF6FF" width={17} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppChart;
