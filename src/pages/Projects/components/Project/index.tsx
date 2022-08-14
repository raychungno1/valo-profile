import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import ImageWithLoad from "../../../../components/ImageWithLoad";
import SquareCorner from "../../../../components/SquareCorner";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { logos } from "../../../../utils/logos";
import { ProjectProps } from "../../../../utils/projects";

import "./styles.css";

const Project = ({ title, desc, code, demo, skills, bg }: ProjectProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className="project__container relative w-full h-[400px] md:h-[200px] p-4 flex flex-col md:flex-row justify-between bg-[#101622]">
      <div className="project__img absolute top-0 left-0 md:left-[35%] w-full md:w-[200px] lg:w-[400px] xl:w-[200px] h-3/5 md:h-full overflow-hidden flex items-center justify-center">
        <ImageWithLoad
          img={bg}
          width={
            width >= 1280
              ? 200
              : width >= 1024
              ? 400
              : width >= 768
              ? 200
              : width >= 640
              ? width / 2
              : width
          }
          height={width >= 768 ? 200 : 250}
          variant="rectangular"
          className="project__img-inner w-full h-full object-cover object-[0%,30%] blur-sm md:blur-none opacity-40 md:opacity-75"
        />
      </div>
      <div className="w-auto md:w-2/5 md:max-w-[250px] h-3/5 md:h-auto flex flex-col justify-center items-center gap-2 p-1 z-10">
        <p className="text-3xl font-bold uppercase text-center text-white md:background-black">
          {title}
        </p>
        <div className="project__skills w-full p-1 flex flex-wrap gap-2 justify-center items-center text-white text-4xl">
          {skills.map(
            (skill, i) =>
              skill !== "html" &&
              skill !== "css" && (
                <ImageWithLoad
                  key={i}
                  img={logos[skill]}
                  width={24}
                  height={24}
                  variant="circular"
                  className="h-6"
                />
              )
          )}
        </div>
        {(code || demo) && (
          <div
            className="w-full flex items-center justify-center gap-4 h-8 z-10 text-white"
            style={{ textShadow: "1px 1px #000000" }}
          >
            {code && (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="max-w-[50%] flex-1"
              >
                <SquareCorner
                  className="flex gap-1 items-center justify-center"
                  animated
                  changeColorOnHover
                >
                  <>
                    <p className="hidden xl:block text-xl uppercase">Code</p>
                    <BsGithub className="text-2xl xl:text-base" />
                  </>
                </SquareCorner>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="max-w-[50%] flex-1"
              >
                <SquareCorner
                  className="flex gap-1 items-center justify-center"
                  color="green"
                  animated
                  changeColorOnHover
                >
                  <>
                    <p className="hidden xl:block text-xl uppercase">Demo</p>
                    <FiExternalLink className="text-2xl xl:text-base" />
                  </>
                </SquareCorner>
              </a>
            )}
          </div>
        )}
      </div>
      <div className="w-auto md:w-2/5 md:max-w-[250px] h-[35%] md:h-auto bg-black bg-opacity-40 flex items-center justify-center text-center p-2 z-10 backdrop-blur-sm">
        {desc}
      </div>
    </div>
  );
};

export default Project;
