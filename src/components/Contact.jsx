import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const handleEmailClick = (email) => {
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}`;
    window.open(gmailComposeUrl, "_blank");
  };
  return (
    <footer className="border-b border-neutral-900 pb-20">
      <motion.h5
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h5>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <button
          onClick={() => handleEmailClick("cjohn0874@gmail.com")}
          className="border-b"
        >
          {CONTACT.email}
        </button>
      </div>
    </footer>
  );
};

export default Contact;
