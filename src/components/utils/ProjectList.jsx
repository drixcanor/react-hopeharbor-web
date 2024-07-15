import React from "react";
import { motion } from "framer-motion";

const ProjectList = ({ image, title, description, technologies }) => {
  return (
    <div className="mb-8 flex flex-wrap lg:justify-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/4"
      >
        <img
          className="mb-6 rounded"
          src={image}
          alt="Project Image"
          width={150}
          height={150}
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl lg:3/4"
      >
        <h6 className="mb-2 font-semibold">{title}</h6>
        <p className="mb-4 text-neutral-400">{description}</p>
        {technologies.map((tech, index) => (
          <span
            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
            key={index}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;
