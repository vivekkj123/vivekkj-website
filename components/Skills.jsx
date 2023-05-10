import React from 'react'


const Skills = () => {
  return (
    <section
        data-aos="zoom-in-down"
        id="skills"
        className="p-8 text-center md:text-left md:p-32"
      >
      <div>

        <h1 className="text-4xl md:text-6xl font-bold">Skills 🚀</h1>
        <p className="text-xl mt-5">I&apos;m well experienced in these technologies</p>
        <div className="columns-2 md:mt-16 mt-5 leading-10 text-lg md:text-2xl">
          <div>
            <ul className="flex flex-col gap-4">
              <li><i className="fa-brands fa-react"></i> ReactJS</li>
              <li><i className="ai-nextjs-fill"></i> NextJS</li>
              <li><i className="bx bxl-flutter"></i> Flutter</li>
              <li><i className="ai-node-fill"></i> Node.JS</li>
              <li><i className="fa-brands fa-react"></i> React Native</li>
              <li><i className="bx bxl-tailwind-css"></i> Tailwind CSS</li>
              <li><i className="bx bxl-sass"></i> Sass, Scss</li>
              <li><i className="ai-figma-fill"></i> Figma</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li><i className="ai-vue-fill"></i> VueJS</li>
              <li><i className="bx bxl-c-plus-plus"></i> C/C++</li>
              <li><i className="bx bxl-java"></i> Java</li>
              <li><i className="bx bxl-python"></i> Python</li>
              <li><i className="bx bxl-git"></i> Git</li>
              <li><i className="fa-brands fa-linux"></i> GNU/Linux</li>
              <li><i className="bx bx-data"></i> Databases (MongoDB, MySQL)</li>
              <li><i className="bx bxl-firebase"></i> Firebase</li>
            </ul>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Skills