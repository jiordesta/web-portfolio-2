import React from "react";

export default function Projects() {
  const ProjectFolder = ({ title, stack }) => {
    return (
      <div className="border-2 border-[#00ADB5] rounded-lg border-dotted min-h-[150px] hover:cursor-pointer hover:border-white">
        <div className="flex justify-end">
          <div className="w-[50%] p-2 text-center">
            <h1 className="">Tech Stack</h1>
          </div>
          <div className="w-[50%] border-b-2 border-l-2 border-[#00ADB5] border-dotted rounded-bl-lg p-2">
            <h1 className="font-semibold underline text-center">{title}</h1>
          </div>
        </div>
        <div className="flex flex-row">
          <ul className="w-full md:w-[60%] flex flex-wrap justify-start items-center gap-2 p-2">
            {stack.map((val) => {
              return (
                <li
                  key={val}
                  className="p-[8px] bg-[#222831] rounded-lg drop-shadow-lg"
                >
                  {val}
                </li>
              );
            })}
          </ul>
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="flex flex-col px-8 md:px-16 xl:px-64 bg-[#222831] text-[#00ADB5] py-8 gap-8 lg:gap-16"
    >
      <div className="w-full">
        <h1 className="text-4xl font-bold pb-4">Sample Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          totam suscipit. Laborum, expedita! Ipsum saepe praesentium rerum
          beatae laborum minus itaque aliquam? Adipisci amet molestiae
          reiciendis aliquid tenetur suscipit assumenda fugit quibusdam
          necessitatibus? Quis, ex!
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-8">
        <ul className="flex flex-wrap gap-2 justify-center items-center">
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
          <li>
            <ProjectFolder
              title="todo-list-web-app"
              stack={["MongoDb", "Express", "ReactJs", "NodeJs"]}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
