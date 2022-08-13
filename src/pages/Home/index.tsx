import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsAwardFill, BsFillPeopleFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

import { awards, education, experiences } from "./about";
import AboutTab from "./components/AboutTab";
import Hobbies from "./components/Hobbies";
import MiniNavBar from "./components/MiniNavBar";

import "./styles.css";

const Home = () => {
  const [option, setOption] = useState(0);

  const renderAboutInfo = (option: number) => {
    switch (option) {
      case 3:
        return <Hobbies />;
      case 2:
        return <AboutTab title={"Awards"} info={awards} />;
      case 1:
        return <AboutTab title={"Education"} info={education} />;
      case 0:
      default:
        return <AboutTab title={"Experience"} info={experiences} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      <div className="relative w-full min-h-[80vh] h-auto z-10 my-10 lg:my-14">
        <div className="about__container relative max-w-2xl w-4/5 xl:w-2/5 left-1/2 lg:left-1/3 -translate-x-1/2 bg-black bg-opacity-60 px-2 py-8">
          <p className="text-xl font-light tracking-wider uppercase pl-1 text-center lg:text-left text-white">
            Software Engineer
          </p>
          <p className="text-7xl leading-[3.5rem] font-bold uppercase text-center lg:text-left text-[#eaeeb2] md:background-black mb-2">
            Ray Chung
          </p>
          <div className="about__divider mt-10" />
          <div className="about__divider mt-2 mb-6" />
          <p className=" pl-1 text-[#eaeeb2] mb-12">
            I'm a software developer studying Computer Science and Engineering
            at the Ohio State University. I love both front-end and back-end
            development, and have a big interest in machine learning and AI.
          </p>
          <div className="mb-12">
            <MiniNavBar
              options={[
                { name: "Experience", icon: <BsFillPeopleFill /> },
                { name: "Education", icon: <MdSchool /> },
                { name: "Awards", icon: <BsAwardFill /> },
                { name: "Hobbies", icon: <IoGameController /> },
              ]}
              option={option}
              setOption={setOption}
            />
          </div>
          {renderAboutInfo(option)}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
