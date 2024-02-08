import React from "react";
import { Card } from "antd";
export default function ProjectCard() {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img className="h-[200px] p-5" src="/icons/debug.svg" alt="" />}
    >
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        accusantium cupiditate ducimus, voluptas sapiente vero vitae earum nihil
        dicta neque provident fuga ea possimus laborum.
      </p>
    </Card>
  );
}
