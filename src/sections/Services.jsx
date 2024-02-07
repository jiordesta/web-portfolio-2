import React from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center">
      <div className="w-full px-8 py-4">
        <h1 className="py-4">Title here!</h1>
        <p className="py-8">
          Some text here Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quisquam aut amet nisi illo facilis dolorem quas sunt tenetur
          dolore quo culpa tempora accusantium, nostrum voluptatibus!
        </p>
        <button className="bg-gray-200 rounded-lg px-6 py-2">
          Hello world
        </button>
      </div>
      <div className="grid md:grid-cols-2 w-full px-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
