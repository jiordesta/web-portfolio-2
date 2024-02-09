import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="px-8 md:px-16 xl:px-64 py-6 lg:py-8 bg-[#222831] sticky top-0 z-40 text-[#00ADB5] drop-shadow-lg md:drop-shadow-none">
      <div className="flex flex-row">
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full">
            <h1 className="text-3xl font-semibold hidden">Hey There</h1>
          </div>
          <div className="w-full lg:flex justify-end items-end hidden">
            <ul className="flex flex-row gap-12 nav-list">
              <li>Home</li>
              <li>About</li>
              <li>Education</li>
              <li>Services</li>
              <li>Skills</li>
              <li>Contact</li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
        <div className="block lg:hidden">
          <div
            className="burger-menu"
            onClick={() => {
              setToggle(!toggle);
              document.querySelector(".burger-menu").classList.toggle("active");
              document.querySelector(".nav-menu").classList.toggle("active");
            }}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
      <div className="nav-menu">
        <ul className="flex flex-col justify-end items-end gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Education</li>
          <li>Services</li>
          <li>Skills</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </div>
    </section>
  );
}
