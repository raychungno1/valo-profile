import React from "react";
import { MdDoubleArrow } from "react-icons/md";

import "./styles.css";

interface IProps {
  title: string;
  color?: "blue" | "green" | "red" | "yellow";
  icon: JSX.Element;
  link: string;
}

const ContactLink = ({ title, color = "blue", icon, link }: IProps) => {
  return (
    <div className="w-full max-w-lg h-24 lg:h-32 overflow-hidden">
      <a href={link} target="_blank" rel="noreferrer">
        <div
          className={`project-card project-card__${color} project-card__shadow relative w-full h-full`}
        >
          <div className="project-card__bg-icon absolute w-full h-full text-white opacity-5 flex items-center justify-center text-[20rem]">
            <MdDoubleArrow className="rotate-90" />
          </div>
          <div className="project-card__icon-shadow absolute right-0 h-full w-2/3 mr-4 flex justify-center items-center text-black text-opacity-20 text-7xl lg:text-9xl lg:text-[12rem]">
            {icon}
          </div>
          <div
            className={`project-card__icon-${color} absolute right-0 h-full w-2/3 mr-4 flex justify-center items-center text-7xl lg:text-9xl lg:text-[12rem]`}
          >
            {icon}
          </div>
          <div className="absolute z-10 w-full h-full bottom-1 flex items-end justify-center sm:justify-start border-b-[1px] px-2">
            <h1 className="sm:ml-20 md:ml-0 text-white uppercase font-bold text-xl sm:text-2xl leading-none w-[150px] font-mono tracking-wider">
              {title}
            </h1>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactLink;
