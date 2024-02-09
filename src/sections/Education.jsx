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
      title: "Best Oral Presenter Award",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe natus consectetur quam eligendi earum molestias expedita dolore labore officia.",
    },
    {
      img: "/images/internship.jpg",
      title: "Excellent Intern",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate veniam recusandae. Rerum dolorem praesentium necessitatibus, sit repudiandae ipsum facilis tenetur molestiae, ea libero voluptatem soluta. Officiis mollitia ab itaque?",
    },
  ];

  return (
    <section
      id="academics"
      className="bg-[#222831] text-[#00ADB5] px-8 md:px-16 xl:px-64 pt-8 xm:pt-0 pb-8"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 w-full pb-4">
          <div className="flex flex-col">
            <div className="py-1 bg-[#00ADB5] hidden lg:flex" />
            <h1 className="text-4xl font-bold">Academics</h1>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            delectus a soluta sit praesentium optio doloribus error, harum
            consectetur! Dicta! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Debitis, nam ea. Unde omnis error odio impedit
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            commodi porro neque totam asperiores consequuntur quis consequatur
            sit quisquam unde quos, praesentium laborum quia odio? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Excepturi commodi
            porro neque totam asperiores consequuntur quis consequatur sit
            quisquam unde quos, praesentium laborum quia odio?
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-2 pt-8 edlg:pt-0 ">
          {data.map((vals) => {
            return (
              <div className="w-[350px]" key={vals.title}>
                <EducationCard {...vals} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
