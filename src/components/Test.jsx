import React from "react";

export default function Test({ img, title, des }) {
  return (
    <div className="flex flex-col border-2 h-full bg-[#222831] border-[#00ADB5] p-1 rounded-lg border-dotted">
      <div className="h-[250px] overflow-hidden flex justify-center items-center rounded-lg">
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="text-xl edmd:text-2xl bg-[#00ADB5] text-[#EEEEEE] my-2 p-2 rounded-lg">
          {title}
        </h1>
        <p className="p-2">{des}</p>
      </div>
    </div>
  );
}
