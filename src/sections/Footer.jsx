import React from "react";

export default function Footer() {
  return (
    <section className="flex flex-col lg:flex-row px-8 md:px-16 xl:px-64 bg-[#222831] text-[#00ADB5] py-16 lg:py-32 gap-8 drop-shadow-lg">
      <div className="w-full flex flex-col gap-10">
        <div className="py-1 bg-[#00ADB5]" />
        <h1 className="text-4xl">John Irson Ordesta</h1>
        <p>
          Thank you for visiting my website portfolio. I appreciate your time
          and interest in exploring my projects, reflecting my skills in web
          development, web design, security development, and full-stack
          development. Your consideration means a lot, and I look forward to
          potential collaborations in the future.
        </p>
        <ul className="flex flex-row gap-4">
          <li className="flex">
            <img
              src="/icons/facebook.svg"
              className="rounded-lg drop-shadow-lg"
              width={50}
              alt=""
            />
          </li>
          <li className="">
            <img
              src="/icons/github.svg"
              className="rounded-lg drop-shadow-lg"
              width={50}
              alt=""
            />
          </li>
          <li className="">
            <img
              src="/icons/instagram.svg"
              className="rounded-lg drop-shadow-lg"
              width={50}
              alt=""
            />
          </li>
          <li className="">
            <img
              src="/icons/messenger.svg"
              className="rounded-lg drop-shadow-lg"
              width={50}
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-start lg:justify-center ">
        <ul className="flex flex-col gap-4 text-xl">
          <li>About</li>
          <li>Academics</li>
          <li>Skills</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
    </section>
  );
}
