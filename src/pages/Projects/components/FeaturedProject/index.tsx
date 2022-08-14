import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

import "./styles.css";
import defaultBG from "../../../../images/home-bg.png";
import SquareCorner from "../../../../components/SquareCorner";
import { logos } from "../../../../utils/logos";
import { ProjectProps } from "../../../../utils/projects";
import ImageWithLoad from "../../../../components/ImageWithLoad";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

interface IProps extends ProjectProps {
  level: number;
  position: number;
  color?: string;
}

const FeaturedProject = ({
  level,
  position,
  title,
  code,
  demo,
  skills = [],
  color = "black",
  bg = defaultBG,
}: IProps) => {
  const { width } = useWindowDimensions();
  const levelClassName = `project__level-${level}`;
  const posClassName = `project__pos-${position}`;

  return (
    <div
      className={`${levelClassName} ${posClassName} w-[19%] h-[450px] xl:h-[650px]`}
    >
      <div
        className="project__container w-full h-full relative"
        style={{
          background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${color} 40%)`,
          animation: "fadeIn 400ms ease-in-out",
        }}
      >
        <div className="project__bg flex items-center justify-center">
          <ImageWithLoad
            img={bg}
            width={250}
            height={width >= 1280 ? 650 : 450}
            variant="rectangular"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="project__main-content">
          <p className="project__title">{title}</p>
          <div className="h-full my-2 bg-black bg-opacity-80 full flex items-center justify-center">
            <div className="project__skills w-full h-8 p-1 flex gap-2 justify-center items-center text-white text-4xl">
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
          </div>
          <div
            className="absolute w-[90%] left-[5%] flex items-center justify-center gap-4 h-8 z-10 text-white"
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
        </div>
        <div className="project__side-highlight" />
        <div className="project__top-border" />
        <div className="project__top-border-bold" />
        <div className="project__top-decoration" />
        <div className="project__bottom-border" />
        <div className="project__bottom-border-bold" />
        <div className="project__bottom-decoration" />
        <div className="project__bottom-highlight" />
      </div>
    </div>
  );
};

export default FeaturedProject;
