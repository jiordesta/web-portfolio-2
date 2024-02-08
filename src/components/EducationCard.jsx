import React from "react";
import { Card } from "antd";
export default function EducationCard({ img, title, des }) {
  return (
    <div>
      <div className="flex flex-col  edsm:flex-row edmd:flex-col">
        <div className="h-[300px] w-[350px] overflow-hidden">
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-full rounded-t-lg rounded-b-[0px] edsm:rounded-l-lg edsm:rounded-r-[0px] edmd:rounded-t-lg edmd:rounded-b-[0px]"
          />
        </div>
        <div className="edmd:h-[100px] edmd:w-[350px] border-[#00ADB5] border-dotted border-b-2 border-r-2 border-l-2 border-t-0 rounded-b-lg rounded-t-[0px] edsm:border-l-0 edsm:border-t-2 edsm:border-r-2 edsm:border-b-2 edsm:rounded-l-[0px] edsm:rounded-r-lg edmd:border-t-0 edmd:border-l-2 edmd:border-r-2 edmd:border-b-2 edmd:rounded-t-[0px] edmd:rounded-b-lg">
          <h1 className="p-2 text-[16px] edmd:text-[22px] font-bold">
            {title}
          </h1>
          <p className="px-2 edmd:truncate max-w-[350px] overflow-hidden">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}
