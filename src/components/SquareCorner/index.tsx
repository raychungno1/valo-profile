import React from "react";

import "./styles.css";

interface IProps {
  animated?: boolean;
  changeColorOnHover?: boolean;
  defaultHover?: boolean;
  className?: string;
  color?: "black" | "green";
  children?: JSX.Element;
}
const SquareCorner = ({
  animated,
  changeColorOnHover,
  defaultHover,
  className = "",
  color = "black",
  children,
}: IProps) => {
  const anim = animated ? "square-container__animated" : "";
  const change = changeColorOnHover ? "square-container__changeOnHover" : "";
  const defHover = defaultHover ? "square-corner__default-hover" : "";
  const colorClass = `square-container__${color}`;

  return (
    <div
      className={`square-container ${colorClass} ${anim} ${change} ${defHover} backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default SquareCorner;
