import React from "react";

export default function Services() {
  return (
    <section
      id="services"
      className="flex justify-center items-center bg-[#222831] text-[#00ADB5] px-8 md:px-16 xl:px-64 py-16 lg:py-32"
    >
      <div className="flex flex-col sklg:flex-row gap-8">
        <div className="w-full flex flex-row lg:justify-center lg:items-center">
          <div className="w-full md:w-1/2 sklg:w-[60%] flex flex-col gap-8">
            <h1 className="text-5xl font-semibold">Freelance Services</h1>
            <p>
              Some text here Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam aut amet nisi illo facilis dolorem quas sunt
              tenetur dolore quo culpa tempora accusantium, nostrum
              voluptatibus!
            </p>
            <button className="rounded-lg px-6 py-2 w-1/2 bg-[#222831] hover:bg-[#393E46] hover:text-white transition-colors ease-in-out duration-500 drop-shadow-lg">
              Contact me!
            </button>
          </div>
          <div className="w-[40%] sklg:flex justify-center items-center hidden">
            <img src="/icons/develop.svg" alt="" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <ul className="flex flex-wrap gap-4 lg:justify-center lg:items-center text-[12px] sm:text-[16px] service">
            <li>Web Dev.</li>
            <li>Web Design</li>
            <li>Frontend Dev.</li>
            <li>Backend Dev.</li>
            <li>Security Dev.</li>
            <li>Fullstack Web Dev.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
