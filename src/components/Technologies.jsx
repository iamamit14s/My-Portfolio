import { motion } from "framer-motion";
import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa"; 
import { FaJava } from "react-icons/fa"; 
import { SiRedux } from "react-icons/si"; 
import { IoLogoFirebase } from "react-icons/io5"; 
import { RiTailwindCssFill } from "react-icons/ri"; 
import { FaBootstrap } from "react-icons/fa"; 

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 py-10  text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 "
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-cyan-400" />
        </motion.div>
        
        <motion.div
          variants={iconVariants(5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoFirebase className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initials"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
