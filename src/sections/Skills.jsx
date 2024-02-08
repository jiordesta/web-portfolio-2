import React from "react";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section className="px-16 py-8 bg-[#222831]">
      <div className="flex flex-col justify-center items-center text-[#00ADB5]">
        <p className="w-full py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae
          officiis architecto eaque! Nulla omnis fugit totam harum consectetur
          amet dolores eum adipisci veniam quos! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Aliquam, sint. Repellendus maxime
          dolorum ratione omnis quae harum, accusamus impedit iusto aliquam?
          Culpa, odit. Placeat, commodi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae nobis sint eius magnam. Quo molestias
          perferendis incidunt autem est? Suscipit, neque fugit quae saepe vel
          cumque. Culpa tempore ullam sequi Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Alias eius repellat rem esse suscipit
          autem tempora magni, velit est. Laborum quaerat earum reiciendis saepe
        </p>
        <div className="w-full flex flex-wrap justify-center items-center gap-2">
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </section>
  );
}
