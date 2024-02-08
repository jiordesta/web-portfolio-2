import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between lg:h-screen bg-[#222831] text-[#00ADB5] px-16 py-8 lg:py-0">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="pb-4">
          <h1 className="text-4xl lg:text-6xl font font-semibold">
            John Irson O.
          </h1>
          <h1 className="text-2xl">Software Developer | Web Developer</h1>
        </div>
        <p className="text-[16px]">
          Highly motivated programmer seeking to launch a successful career in
          software engineering. Equipped with a strong academic background,
          passion for continuous learning, and a drive for excellence, I am
          eager to contribute my skills and enthusiasm to a dynamic and
          growth-oriented organization.
        </p>
      </div>
      <div className="flex justify-center items-center w-full object-cover overflow-hidden md:ps-[50px] lg:ps-[200px] pt-8 md:pt-0">
        <img
          src="/images/profile2.jpg"
          className="rounded-full"
          alt="profile"
        />
      </div>
    </section>
  );
}
