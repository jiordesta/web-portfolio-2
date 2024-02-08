import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col justify-center items-center p-8 lg:px-32">
      <div className="border border-solid border-black rounded-lg w-full flex flex-col lg:flex-row">
        <div className="flex flex-col gap-12 w-full p-8 justify-center items-start">
          <div className="flex flex-col justify-start items-start gap-5">
            <span className="flex flex-row justify-center items-center">
              <img src="/icons/security.svg" width={50} alt="" />
              <h1 className="text-xl font-semibold">dasdasd</h1>
            </span>
            <span className="flex flex-row justify-center items-center">
              <img src="/icons/security.svg" width={50} alt="" />
              <h1 className="text-xl font-semibold">dasdasd</h1>
            </span>
            <span className="flex flex-row justify-center items-center">
              <img src="/icons/security.svg" width={50} alt="" />
              <h1 className="text-xl font-semibold">dasdasd</h1>
            </span>
            <span className="flex flex-row justify-center items-center">
              <img src="/icons/security.svg" width={50} alt="" />
              <h1 className="text-xl font-semibold">dasdasd</h1>
            </span>
          </div>
          <div className="flex flex-row gap-8">
            <span>
              <img src="./icons/debug.svg" width={50} alt="" />
            </span>
            <span>
              <img src="./icons/debug.svg" width={50} alt="" />
            </span>
            <span>
              <img src="./icons/debug.svg" width={50} alt="" />
            </span>
            <span>
              <img src="./icons/debug.svg" width={50} alt="" />
            </span>
          </div>
        </div>
        <div className="w-full p-8 gap-4 flex flex-col">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-4 w-full border border-black rounded-lg text-[18px] bg-slate-100 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 w-full border border-black rounded-lg text-[18px] bg-slate-100 focus:outline-none"
          />
          <textarea
            name=""
            id=""
            placeholder="Enter your message"
            className="p-4 w-full border border-black rounded-lg text-[18px] bg-slate-100 focus:outline-none"
            cols="30"
            rows="10"
          />
          <button className="bg-black text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointer">
            Submit!
          </button>
        </div>
      </div>
    </section>
  );
}
