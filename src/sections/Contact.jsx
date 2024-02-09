import React from "react";

export default function Contact() {
  return (
    <section className="px-8 md:px-16 xl:px-64 bg-[#222831] text-[#00ADB5] py-8 lg:py-32">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold pb-4">Contacts</h1>
          <div className="flex flex-col gap-4 py-8 lg:py-16 items-start">
            <span className="flex flex-row justify-center items-center gap-2">
              <img src="/icons/phone.svg" width={50} alt="" />
              <h1 className="text-2xl">+639123456789</h1>
            </span>
            <span className="flex flex-row justify-center items-center gap-2">
              <img src="/icons/email.svg" width={50} alt="" />
              <h1 className="text-2xl">jiordesta@gmail.com</h1>
            </span>
            <span className="flex flex-row justify-center items-center gap-2">
              <img src="/icons/linkedin.svg" width={50} alt="" />
              <h1 className="text-2xl">john-irson-ordesta-130014297/</h1>
            </span>
            <span className="flex flex-row justify-center items-center gap-2">
              <img src="/icons/messenger.svg" width={50} alt="" />
              <h1 className="text-2xl">@jiordesta</h1>
            </span>
          </div>
          <ul className="flex flex-row gap-4">
            <img src="/icons/github.svg" width={50} alt="" />
            <img src="/icons/facebook.svg" width={50} alt="" />
            <img src="/icons/instagram.svg" width={50} alt="" />
            <img src="/icons/linkedin.svg" width={50} alt="" />
            <img src="/icons/messenger.svg" width={50} alt="" />
            <img src="/icons/gmail.svg" width={50} alt="" />
          </ul>
        </div>
        <div className="w-full flex flex-col gap-4 pt-8 lg:pt-0">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-6 rounded-lg bg-[#222831] placeholder:text-[#00ADB5] drop-shadow-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-6 rounded-lg bg-[#222831] placeholder:text-[#00ADB5] drop-shadow-lg focus:outline-none"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            placeholder="Your message"
            className="w-full p-6 rounded-lg bg-[#222831] placeholder:text-[#00ADB5] drop-shadow-lg focus:outline-none"
          />
          <button className="p-2 rounded-lg w-1/2 lg:w-1/4 drop-shadow-lg bg-[#222831] hover:bg-[#393E46] hover:text-white transition-colors ease-in-out duration-500">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
