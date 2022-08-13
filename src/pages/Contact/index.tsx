import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import SquareCorner from "../../components/SquareCorner";
import ContactLink from "./components/ContactLink";
import Hero from "./components/Hero";

import "./styles.css";

const Contact = () => {
  return (
    <motion.div
      className="container m-auto pt-14 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      <Hero />
      <div className="hidden sm:flex relative w-full sm:gap-6 items-center justify-center mb-6 z-10">
        <div className="hero__divider hero__divider-left" />
        <SquareCorner
          animated
          className="mx-auto min-w-[100px] sm:flex-none sm:w-[300px]"
        >
          <p className="p-1 text-white text-lg sm:text-2xl uppercase font-light tracking-wider text-center">
            Contact Me
          </p>
        </SquareCorner>
        <div className="hero__divider hero__divider-right" />
      </div>
      <div className="contact__links mt-6 w-full mx-auto relative z-10 flex justify-center items-center flex-col sm:flex-row gap-6 mb-10">
        <ContactLink
          title={"LinkedIn"}
          color="green"
          icon={<BsLinkedin />}
          link={"https://linkedin.com/in/raychungno1"}
        />
        <ContactLink
          title={"Github"}
          color="red"
          icon={<BsGithub />}
          link={"https://github.com/raychungno1"}
        />
      </div>
    </motion.div>
  );
};

export default Contact;
