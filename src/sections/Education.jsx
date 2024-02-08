import React from "react";
import EducationCard from "../components/EducationCard";
import Test from "../components/Test";

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
    <section className="bg-[#222831] text-[#00ADB5] px-16 pb-8">
      <div className="flex flex-wrap edlg:flex-row justify-center items-center">
        <p className="flex items-center text-start edlg:w-1/4 edmd:pb-0 pb-4">
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
        <div className="flex flex-wrap justify-center w-full edlg:w-3/4 gap-2 pt-8 edlg:pt-0 ">
          {data.map((vals) => {
            return (
              <div className="w-[350px]" key={vals.title}>
                <Test {...vals} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
