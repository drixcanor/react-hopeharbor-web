import React from "react";
import { TechnologiesIcons } from "../components/utils";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const Technologies = () => {
  const TechIcons = [
    { Icon: RiReactjsLine, Color: "text-cyan-400", duration: 2.5 },
    { Icon: RiTailwindCssFill, Color: "text-cyan-400", duration: 3 },
    { Icon: FaLaravel, Color: "text-red-900", duration: 5 },
    { Icon: SiMysql, Color: "text-cyan-400", duration: 2 },
    { Icon: IoLogoJavascript, Color: "text-yellow-400", duration: 6 },
  ];
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TechIcons.map((TechIcon, index) => (
          <TechnologiesIcons
            key={index}
            IconComponent={TechIcon.Icon}
            Color={TechIcon.Color}
            duration={TechIcon.duration}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
