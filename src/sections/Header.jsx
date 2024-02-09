import React, { useEffect, useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [prev, setPrev] = useState("0");

  const navigate = ({ target, id }) => {
    const element = document.getElementById(target);
    const top = element.getBoundingClientRect().top;
    const y = window.scrollY;
    const offset = document.getElementById("header").scrollHeight;

    const currentElement = document.getElementById(id);
    const prevElement = document.getElementById(prev);

    prevElement.classList.toggle("active");
    currentElement.classList.toggle("active");

    setPrev(id);

    window.scrollTo({
      top: y + top - offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const prevElement = document.getElementById(prev);
    if (!prevElement.classList.contains("active")) {
      prevElement.classList.toggle("active");
    }
  }, []);

  return (
    <section
      id="header"
      className="px-8 md:px-16 xl:px-64 py-6 lg:py-8 bg-[#222831] sticky top-0 z-40 text-[#00ADB5] drop-shadow-lg md:drop-shadow-none"
    >
      <div className="flex flex-row">
        <div className="w-full flex flex-row justify-center items-center">
          <div className="w-full">
            <h1 className="text-3xl font-semibold hidden">Hey There</h1>
          </div>
          <div className="w-full lg:flex justify-end items-end hidden">
            <ul className="flex flex-row gap-12 nav-list">
              <li
                id="0"
                className="navlink"
                onClick={() => navigate({ target: "about", id: "0" })}
              >
                About
              </li>
              <li
                id="1"
                className="navlink"
                onClick={() => navigate({ target: "academics", id: "1" })}
              >
                Education
              </li>
              <li
                id="2"
                className="navlink"
                onClick={() => navigate({ target: "skills", id: "2" })}
              >
                Skills
              </li>
              <li
                id="4"
                className="navlink"
                onClick={() => navigate({ target: "projects", id: "4" })}
              >
                Projects
              </li>
              <li
                id="3"
                className="navlink"
                onClick={() => navigate({ target: "services", id: "3" })}
              >
                Services
              </li>
              <li
                id="5"
                className="navlink"
                onClick={() => navigate({ target: "contact", id: "5" })}
              >
                Contact
              </li>
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
        <ul className="flex flex-col justify-end items-end gap-2 nav-list">
          <li onClick={() => navigate({ target: "about", id: "0" })}>About</li>
          <li onClick={() => navigate({ target: "academics", id: "1" })}>
            Education
          </li>
          <li onClick={() => navigate({ target: "skills", id: "2" })}>
            Skills
          </li>
          <li onClick={() => navigate({ target: "projects", id: "4" })}>
            Projects
          </li>
          <li onClick={() => navigate({ target: "services", id: "3" })}>
            Services
          </li>
          <li onClick={() => navigate({ target: "contact", id: "5" })}>
            Contact
          </li>
        </ul>
      </div>
    </section>
  );
}
