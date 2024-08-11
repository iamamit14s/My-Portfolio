import { motion } from "framer-motion";
import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="m-20 max-lg:m-15 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full px-12 lg:w-1/4 mb-2"
            >
              <p className="">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-bold text-xl">
              
                {experience.project} -{" "}
                <span className="text-purple-100 text-xl">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {experience.description.map((desc, index) => (
                  <ul
                    key={index}
                    className="font-montserrat text-slate-200 text-semibold leading-2 mt-4 "
                  >
                    <li className="rounded-lg backdrop-blur-lg z-40 bg-slate-800 p-2 pl-4 ">{desc}</li>
                  </ul>
                ))}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm font-medium text-slate-200"
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

export default Experience;
