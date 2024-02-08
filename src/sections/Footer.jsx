import React from "react";

export default function Footer() {
  return (
    <section className="bg-gray-300 text-white p-8 flex  flex-col lg:flex-row">
      <div className="w-2/3">
        <h1>Hellow world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          architecto illum, sunt quasi quis eius possimus ipsa quos rem corporis
          nulla quidem hic vero eum!
        </p>
        <div className="flex flex-row gap-4">
          <img src="/icons/debug.svg" alt="" width={50} />
          <img src="/icons/debug.svg" alt="" width={50} />
          <img src="/icons/debug.svg" alt="" width={50} />
          <img src="/icons/debug.svg" alt="" width={50} />
        </div>
      </div>
      <div className="w-full flex flex-col lg:justify-center lg:items-center">
        <div>
          <h1>Pages</h1>
          <ul>
            <li>dasdasd</li>
            <li>dasdasd</li>
            <li>dasdasd</li>
            <li>dasdasd</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
