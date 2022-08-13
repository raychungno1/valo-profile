import React from "react";

import "./styles.css";

interface IProps {
  options: {
    name: string;
    icon: JSX.Element;
  }[];
  option: number;
  setOption: React.Dispatch<React.SetStateAction<number>>;
}

const MiniNavBar = ({ options, option, setOption }: IProps) => {
  return (
    <div className="w-full flex justify-center items-center text-white gap-1">
      <div className="hidden sm:block absolute h-[1px] bg-white w-full -translate-y-2" />
      {options.map(({ name, icon }, i) => (
        <div
          key={i}
          onClick={() => setOption(i)}
          className="w-1/4 max-w-[8rem] bg-white bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-20 flex flex-col gap-2 justify-center items-center p-1"
        >
          <p
            className={`hidden sm:block w-full text-lg text-center font-bold uppercase p-2 ${
              option === i ? "bg-white bg-opacity-50 text-[#0c1428]" : ""
            }`}
          >
            {name}
          </p>
          <div
            className={`relative text-5xl px-1 sm:p-2 sm:pt-3 w-full flex items-center justify-center mininav__top-border ${
              option === i
                ? "bg-white bg-opacity-50 sm:bg-opacity-0 text-[#0c1428] sm:text-white"
                : ""
            }`}
          >
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniNavBar;
