import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full h-auto md:h-[65vh] lg:h-screen">
      <div className="flex flex-col justify-center items-start bg-slate-300 w-full  px-8 py-4 md:py-0 md:px-12 lg:px-12 lg:py-12">
        <h1 className="text-slate-500 text-4xl lg:text-6xl font font-semibold">
          John Irson O.
        </h1>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe
          accusamus adipisci ullam iusto delectus, neque repellendus nemo
          voluptatum enim? Aut blanditiis repellendus consectetur ipsum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center items-center w-full object-cover bg-slate-400 px-8 py-8 md:py-0 md:px-12 lg:px-12 lg:py-12">
        <img
          src="/images/profile2.jpg"
          className="rounded-full"
          alt="profile"
        />
      </div>
    </section>
  );
}
