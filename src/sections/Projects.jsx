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
        <div className="flex flex-col">
          <div className="py-1 bg-[#00ADB5]" />
          <h1 className="text-4xl font-bold pb-4">Projects</h1>
        </div>
        <p>
          My projects serves as a testament to my skills and expertise in the
          realms of web development, web design, security development, and
          full-stack development. Through a collection of diverse projects, I
          showcase my ability to create visually appealing, user-centric
          websites, implement robust security protocols, and seamlessly handle
          both backend and frontend development. Each project reflects my
          commitment to delivering high-quality, innovative solutions tailored
          to specific client needs.
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
