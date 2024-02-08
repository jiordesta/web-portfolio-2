import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="">
      <div className="p-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          totam suscipit. Laborum, expedita! Ipsum saepe praesentium rerum
          beatae laborum minus itaque aliquam? Adipisci amet molestiae
          reiciendis aliquid tenetur suscipit assumenda fugit quibusdam
          necessitatibus? Quis, ex!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 py-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
