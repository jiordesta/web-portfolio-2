import React from "react";
import EducationCard from "../components/EducationCard";

export default function Education() {
  const data = [
    {
      img: "/images/leader.jpg",
      title: "Exceptional Leader",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, a!",
    },
    {
      img: "/images/award.jpg",
      title: "Best Oral presenter award",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe natus consectetur quam eligendi earum molestias expedita dolore labore officia.",
    },
    {
      img: "/images/internship.jpg",
      title: "Excellent Intern",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate veniam recusandae. Rerum dolorem praesentium necessitatibus, sit repudiandae ipsum facilis tenetur molestiae, ea libero voluptatem soluta. Officiis mollitia ab itaque?",
    },
  ];

  return (
    <section>
      <div className="col">
        <div className="row-md-3"></div>
        <div className="row-md-3"></div>
        <div className="row-md-3"></div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3">
        <p className="flex items-center text-start px-8 py-4 w-full col-span-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          delectus a soluta sit praesentium optio doloribus error, harum
          consectetur! Dicta! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Debitis, nam ea. Unde omnis error odio impedit
          excepturi accusamus expedita! Aperiam ipsam maxime voluptate
          aspernatur libero. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Maiores est asperiores voluptatem! Voluptates ab, quae, rem
          fugiat officia voluptatum tempora repellat porro tenetur cumque
          inventore asperiores iure! Eius, laudantium ad?dasd
        </p>
        <div className="grid grid-cols-1 edmd:grid-cols-2 edlg:grid-cols-3 gap-4 col-span-2 p-8">
          {data.map((vals) => {
            return (
              <div
                className="w-full flex justify-center items-center col-span-1"
                key={vals.title}
              >
                <EducationCard {...vals} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
