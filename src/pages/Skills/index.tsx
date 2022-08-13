import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { frameworks, languages, tools } from "./skills";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import SquareCorner from "../../components/SquareCorner";

import { ISkill } from "./skills";
import { logos } from "../../utils/logos";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./styles.css";

const Skills = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState<ISkill | null>(
    width >= 1024 ? languages[0] : null
  );

  useEffect(() => {
    if (width >= 1024 && !selected) {
      setSelected(languages[0]);
    }
  }, [width]);

  const infoElement = (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
      <div className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px]">
        <img
          src={logos[selected?.value || ""]}
          alt="logo"
          className="mx-auto w-full h-full object-contain"
        />
      </div>
      <div className="skill__info-container-1 max-w-[600px] text-white">
        <div className="skill__info-container-2">
          <div className="skill__info-container-3" />
          <div className="skill__info-container-4" />
          <div className="skill__info-container-5" />
          <p className="text-xl leading-[1.25rem] font-light tracking-wider uppercase p-0 text-left text-white">
            {selected?.type}
          </p>
          <p className="text-7xl leading-[3.5rem] font-bold uppercase -ml-1 text-left text-[#eaeeb2] mb-16">
            {selected?.label}
          </p>
          <div className="w-full min-h-[200px]">
            <div className="mb-6">
              <p className="text-lg leading-[1.5rem] font-light uppercase p-0">
                Level
              </p>
              <p className="text-4xl leading-[1.5rem] font-bold capitalize p-0">
                {selected?.experience}
              </p>
            </div>
            {selected?.loc && (
              <div className="mb-6">
                <p className="text-lg leading-[1.5rem] font-light uppercase p-0">
                  Lines of Code
                </p>
                <p className="text-4xl leading-[1.5rem] font-bold uppercase p-0">
                  {selected.loc}+
                </p>
              </div>
            )}
            {selected?.type === "language" && (
              <div
                className="mt-8 pb-5"
                style={{ textShadow: "1px 1px #000000" }}
              >
                <Link to={`/projects?filter=${selected?.value}`}>
                  <SquareCorner
                    className="flex gap-1 items-center justify-center w-max px-5"
                    color="green"
                    animated
                    changeColorOnHover
                  >
                    <p className="text-xl uppercase">View Projects</p>
                  </SquareCorner>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="container m-auto pt-14 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      {selected &&
        (width >= 1024 ? (
          infoElement
        ) : (
          <div className="absolute top-0 left-0 lg:static w-full h-full flex items-center justify-center z-10 backdrop-blur-sm bg-black bg-opacity-50">
            <SquareCorner className="w-[90%] h-[90%] flex items-center justify-center overflow-hidden">
              <>
                <div
                  className="absolute top-5 right-5 text-white text-4xl z-20 cursor-pointer hover:scale-110 hover:text-[#eaeeb2]"
                  onClick={() => setSelected(null)}
                >
                  <AiOutlineClose />
                </div>
                {infoElement}
              </>
            </SquareCorner>
          </div>
        ))}
      <div className="text-center lg:text-left text-white text-2xl">
        <p className="w-full uppercase mb-2">Languages</p>
        <div className="about__divider" />
        <div
          className="grid gap-4 my-2 py-2 justify-between"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          }}
        >
          {languages.map((language, i) => (
            <div onClick={() => setSelected(language)}>
              <div
                className={
                  "mx-auto w-min " +
                  (language === selected
                    ? "outline outline-2 outline-[#eaeeb2] outline-offset-4"
                    : "")
                }
              >
                <SquareCorner
                  key={i}
                  className="skill__item mx-auto w-[80px] h-[80px] p-2 hover:bg-white hover:bg-opacity-20 active:bg-opacity-40 cursor-pointer"
                  color="black"
                  defaultHover
                >
                  <img
                    src={logos[language.value]}
                    alt="logo"
                    className="mx-auto w-full h-full object-contain"
                  />
                </SquareCorner>
              </div>
            </div>
          ))}
        </div>

        <p className="w-full uppercase mt-6 mb-2">Frameworks / Libraries</p>
        <div className="about__divider" />
        <div
          className="grid gap-4 my-2 py-2 justify-between"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          }}
        >
          {frameworks.map((framework, i) => (
            <div onClick={() => setSelected(framework)}>
              <div
                className={
                  "mx-auto w-min " +
                  (framework === selected
                    ? "outline outline-2 outline-[#eaeeb2] outline-offset-4"
                    : "")
                }
              >
                <SquareCorner
                  key={i}
                  className="skill__item mx-auto w-[80px] h-[80px] p-2 hover:bg-white hover:bg-opacity-20 active:bg-opacity-40 cursor-pointer"
                  color="black"
                  defaultHover
                >
                  <img
                    src={logos[framework.value]}
                    alt="logo"
                    className="mx-auto w-full h-full object-contain"
                  />
                </SquareCorner>
              </div>
            </div>
          ))}
        </div>

        <p className="w-full uppercase mt-6 mb-2">Tools</p>
        <div className="about__divider" />
        <div
          className="grid gap-4 my-2 py-2 justify-between"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          }}
        >
          {tools.map((tool, i) => (
            <div onClick={() => setSelected(tool)}>
              <div
                className={
                  "mx-auto w-min " +
                  (tool === selected
                    ? "outline outline-2 outline-[#eaeeb2] outline-offset-4"
                    : "")
                }
              >
                <SquareCorner
                  key={i}
                  className="skill__item mx-auto w-[80px] h-[80px] p-2 hover:bg-white hover:bg-opacity-20 active:bg-opacity-40 cursor-pointer"
                  color="black"
                  defaultHover
                >
                  <img
                    src={logos[tool.value]}
                    alt="logo"
                    className="mx-auto w-full h-full object-contain"
                  />
                </SquareCorner>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
