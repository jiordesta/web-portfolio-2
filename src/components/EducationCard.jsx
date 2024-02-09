import React from "react";

export default function EducationCard({ img, title, des }) {
  return (
    <div className="flex flex-col h-full bg-[#222831] p-2 rounded-lg drop-shadow-lg">
      <div className="h-[250px] overflow-hidden flex justify-center items-center rounded-lg">
        <img src={img} alt="" />
      </div>
      <div>
        <h1 className="text-xl uppercase my-2 p-2 rounded-lg underline">
          {title}
        </h1>
        <p className="p-2">{des}</p>
      </div>
    </div>
  );
}
