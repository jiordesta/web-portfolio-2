import React from "react";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center px-8 py-12">
        <p>
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
          nam, id quos incidunt aut adipisci maiores aliquid repellat deserunt
          eaque doloremque aspernatur, iusto excepturi natus fugiat recusandae,
          corporis tempore quia voluptatum velit a! Officiis, fuga!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 py-4 gap-4">
        <div className="span-col-1 border p-4 border-gray-500 border-solid rounded-lg">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <div className="span-col-1 border p-4 border-gray-500 border-solid rounded-lg">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <div className="span-col-1 border p-4 border-gray-500 border-solid rounded-lg">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-8 py-12">
        <p>
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
          nam, id quos incidunt aut adipisci maiores aliquid repellat deserunt
          eaque doloremque aspernatur, iusto excepturi natus fugiat recusandae,
          corporis tempore quia voluptatum velit a! Officiis, fuga!
        </p>
      </div>
    </section>
  );
}
