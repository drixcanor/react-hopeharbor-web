import React from "react";
import { motion } from "framer-motion";

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

const TechnologiesIcons = ({ IconComponent, Color, duration }) => {
  return (
    <motion.div
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4"
    >
      {IconComponent && <IconComponent className={`text-7xl ${Color}`} />}
    </motion.div>
  );
};

export default TechnologiesIcons;
