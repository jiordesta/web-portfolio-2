import React from "react";

export default function SkillCard() {
  return (
    <div className="flex flex-row">
      <div className="bg-[#EEEEEE] p-2 rounded-s-lg object-contain flex justify-center items-center">
        <img src="/icons/develop.svg" width={150} alt="" />
      </div>
      <div className="w-200 md:w-250 lg:w-[300px] rounded-e-lg border-t-2 border-r-2 border-b-2 border-[#00ADB5] border-dotted">
        <h1 className="text-[16px] md:text-xl lg:text-2xl rounded-lg bg-[#393E46] m-1 p-2 font-semibold text-center">
          Web Development
        </h1>
        <ul className="p-2 flex flex-wrap gap-1 skill-list text-[12px] md:text-[16px]">
          <li>MongoDb</li>
          <li>Express</li>
          <li>ReactJs</li>
          <li>NodeJs</li>
          <li>Firebase</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Redux</li>
          <li>Bootstrap</li>
          <li>AntDesign</li>
        </ul>
      </div>
    </div>
  );
}
