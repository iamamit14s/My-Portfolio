import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full mt-12 lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full mb-8 max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <a
                href={project.link}
                target="_blank"
                className="text-neutral-400 hover:underline mr-2 "
              >
                🔗
              </a>
              <p className="mb-4 text-neutral-400 ">
                {project.description.map((desc, index) => (
                  <ul
                    className="font-montserrat text-slate-200 text-semibold leading-2 mt-4"
                    key={index}
                  >
                    <li className="rounded-lg backdrop-blur-lg z-40 bg-slate-800 p-2 pl-4">
                      {desc}
                    </li>
                  </ul>
                ))}
              </p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded  bg-neutral-900 px-2 py-2 text-sm font-medium text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
