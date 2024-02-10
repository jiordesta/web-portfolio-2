import React from "react";

export default function Hero() {
  return (
    <section
      id="about"
      className="bg-[#222831] text-[#00ADB5] px-8 md:px-16 xl:px-64 py-8 lg:py-0"
    >
      <div className="flex flex-col md:flex-row justify-between lg:h-screen exit-element-lg">
        <div className="flex flex-col justify-center items-start w-full">
          <div>
            <h1 className="text-4xl helg:text-6xl font font-bold">
              John Irson O.
            </h1>
            <h1 className="text-xl hexl:text-2xl pb-1 font-semibold">
              Software Developer | Website Developer
            </h1>
            <div className="py-1 bg-[#00ADB5] hidden lg:flex" />
          </div>
          <p className="text-[16px]">
            Highly motivated programmer seeking to launch a successful career in
            software engineering. Equipped with a strong academic background,
            passion for continuous learning, and a drive for excellence, I am
            eager to contribute my skills and enthusiasm to a dynamic and
            growth-oriented organization.
          </p>
          <span className="bg-[#222831] drop-shadow-lg p-2 rounded-lg mt-4 cursor-pointer hover:bg-[#393E46]">
            download resume
          </span>
        </div>
        <div className="flex justify-center items-center w-full object-cover overflow-hidden md:ps-[50px] lg:ps-[200px] pt-8 md:pt-0 drop-shadow-md">
          <img
            src="/images/profile2.jpg"
            className="rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
