import React from "react";
import { Card } from "antd";
export default function EducationCard({ img, title, des }) {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img className="h-[250px]" src={img} alt={title} />}
    >
      <h1 className="text-[18px] font-bold">{title}</h1>
      <p className="truncate">{des}</p>
    </Card>
  );
}
