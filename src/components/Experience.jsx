import React from "react";
import { EXPERIENCES } from "../constants";
import { TechnologiesStacks } from "./utils";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <TechnologiesStacks
            key={index}
            year={experience.year}
            role={experience.role}
            company={experience.company}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
