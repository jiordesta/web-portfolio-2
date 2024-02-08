import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const data = [
    {
      icon: "./icons/design.svg",
      title: "Web Design",
      des: "Some text here Lorem ipsum dolor sit amet consectetur adipisicing Some text here Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      icon: "./icons/develop.svg",
      title: "Web Development",
      des: "Some text here Lorem ipsum dolor sit amet consectetur adipisicing Some text here Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      icon: "./icons/security.svg",
      title: "Security Development",
      des: "Some text here Lorem ipsum dolor sit amet consectetur adipisicing Some text here Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      icon: "./icons/backend.svg",
      title: "Backend Development",
      des: "Some text here Lorem ipsum dolor sit amet consectetur adipisicing Some text here Lorem ipsum dolor sit amet consectetur adipisicing",
    },
  ];

  return (
    <section className="flex flex-col selg:flex-row justify-between items-center">
      <div className="w-full px-8 py-4">
        <h1 className="py-4">Title here!</h1>
        <p className="py-8">
          Some text here Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam aut amet nisi illo facilis dolorem quas sunt tenetur
          dolore quo culpa tempora accusantium, nostrum voluptatibus!
        </p>
        <button className="bg-gray-200 rounded-lg px-6 py-2">
          Hello world
        </button>
      </div>
      <div className="grid grid-cols-1 sexm:grid-cols-2 sesm:grid-cols-3 semd:grid-cols-4 selg:grid-cols-2 w-full px-8 py-16 gap-2">
        {data.map((vals) => {
          return (
            <div
              key={vals.title}
              className="flex flex-col justify-center items-center"
            >
              <ServiceCard {...vals} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
