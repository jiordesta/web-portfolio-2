import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-16 xl:px-64 py-8 bg-[#222831]">
      <div className="flex flex-col justify-center items-center text-[#00ADB5]">
        <div className="flex flex-col w-full py-8 gap-4">
          <div className="flex flex-col">
            <div className="py-1 bg-[#00ADB5]" />
            <h1 className="text-4xl font-bold">Skills</h1>
          </div>
          <p>
            Over the course of my professional journey, I have diligently
            cultivated a multifaceted skill set, equipping myself with a diverse
            array of capabilities that not only enable me to adeptly navigate
            but also excel in a broad spectrum of technological landscapes.
            Through continuous learning, hands-on experiences, and a commitment
            to staying abreast of the latest industry trends, I have honed my
            abilities to tackle complex challenges and contribute meaningfully
            to diverse technological domains. This ongoing process of skill
            development not only reflects my adaptability but also underscores
            my dedication to remaining at the forefront of innovation and
            emerging technologies, positioning me as a versatile and dynamic
            professional in the ever-evolving technological landscape.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-16 pt-4 skill px-4 lg:px-8">
          <div className="flex flex-col gap-2 w-full drop-shadow-lg">
            <h1 className="text-3xl font-semibold">Technical Skills</h1>
            <div className="flex flex-wrap gap-4 ">
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Web Development</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">MongoDb</div>
                  <div className="underline">Express</div>
                  <div className="underline">ReactJs</div>
                  <div className="underline">NodeJs</div>
                  <div className="underline">Firebase</div>
                  <div className="underline">Redux</div>
                  <div className="underline">AntDesign</div>
                  <div className="underline">Bootstrap</div>
                  <div className="underline">HTML</div>
                  <div className="underline">CSS</div>
                  <div className="underline">TailwindCSS</div>
                  <div className="underline">JavaScript</div>
                </div>
              </div>
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Web Design</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Figma</div>
                  <div className="underline">Draw.io</div>
                </div>
              </div>
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Version Control</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Git</div>
                  <div className="underline">Gitlab</div>
                </div>
              </div>
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Programming Languages</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">C</div>
                  <div className="underline">Java</div>
                  <div className="underline">Python</div>
                  <div className="underline">JavaScript</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full  drop-shadow-lg">
            <h1 className="text-3xl font-semibold">Soft Skills</h1>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Interpersonal</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Teamwork</div>
                  <div className="underline">Adaptability</div>
                  <div className="underline">Critical Thinking</div>
                  <div className="underline">Analytical Reasoning</div>
                  <div className="underline">Critical Thinking</div>
                  <div className="underline">Leadership</div>
                </div>
              </div>
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Communication</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Verbal</div>
                  <div className="underline">Writter</div>
                  <div className="underline">Presentation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full drop-shadow-lg">
            <h1 className="text-3xl font-semibold">Other Skills</h1>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Game Development</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Pygame</div>
                  <div className="underline">Godot</div>
                </div>
              </div>

              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Arts</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Photoshop</div>
                  <div className="underline">Blender</div>
                  <div className="underline">Aseprite</div>
                  <div className="underline">Piskel</div>
                </div>
              </div>

              <div className="bg-[#222831] p-2 rounded-lg flex flex-col max-w-[300px]">
                <h1 className="mb-2 text-[18px]">Robotics</h1>
                <div className="flex flex-wrap gap-4">
                  <div className="underline">Machine Learning</div>
                  <div className="underline">Webots Simulation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
