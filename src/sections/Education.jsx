import React from "react";
import EducationCard from "../components/EducationCard";

export default function Education() {
  const data = [
    {
      img: "/images/leader.jpg",
      title: "Exceptional Leader",
      des: "Led and guided a dedicated thesis team to successful completion, demonstrating exceptional leadership skills and fostering a collaborative environment that propelled us toward our research objectives.",
    },
    {
      img: "/images/award.jpg",
      title: "Best Oral Presenter Award",
      des: "Honored with the Best Oral Presenter award at the 2nd International Conference of Computing and Information Sciences (CIScon) 2023, this accomplishment showcases my strong presentation skills and dedication to impactful communication in the field.",
    },
    {
      img: "/images/internship.jpg",
      title: "Excellent Intern",
      des: "Recognized for exemplary performance as an intern, consistently exceeding expectations and contributing significantly to team projects. Demonstrated a strong work ethic, adaptability, and a quick grasp of complex tasks, resulting in valuable contributions to the organization’s objectives.",
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
            <h1 className="text-4xl font-bold">Education</h1>
          </div>
          <p>
            I hold a degree in Computer Science, underscoring a comprehensive
            understanding of fundamental concepts within the field. Throughout
            my academic journey, I showcased leadership skills, notably
            receiving recognition for exceptional leadership. I also earned the
            Best Oral Presentation Award, a testament to my effective
            communication and presentation abilities. Additionally, my
            exceptional performance during an internship further demonstrated my
            practical application of knowledge, resulting in commendation for
            outstanding contributions. This academic background, coupled with
            real-world experience, positions me as a well-rounded professional
            prepared for challenges and continued growth in the ever-evolving
            landscape of Computer Science.
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
