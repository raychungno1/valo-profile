import React from "react";
import SquareCorner from "../../../../components/SquareCorner";

import myPhoto from "../../../../images/my-photo.png";
import "./styles.css";

const Hero = () => {
  return (
    <div className="h-[60vh] sm:h-[80vh] max-h-[850px] relative -mb-[10vh] md:-mb-[12vh] lg:-mb-[18vh]">
      <div className="w-full h-full absolute hidden sm:block top-0 home__hero-highlights" />
      <div className="w-full h-full absolute top-0 home__hero-border" />
      <div className="w-full h-full absolute top-0 hero__bg home__hero-content md:px-10">
        <div className="absolute top-0 lg:top-auto lg:bottom-0 mx-auto w-[90%] lg:w-auto h-full right-[48%] lg:right-[12%] xl:right-[15%] translate-x-1/2 lg:translate-x-0 flex items-end min-w-[400px]">
          <img src={myPhoto} alt="profile" className="mx-auto" />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 md:px-10">
        <div className="h-full w-full max-w-6xl mx-auto flex flex-col items-center lg:items-start justify-end lg:justify-center">
          <div className="w-auto whitespace-nowrap mb-[10vh] sm:mb-[15vh] lg:mb-0 xl:mb-[10vh] mt-[20vh] lg:mt-[15vh] xl:mt-0 lg:ml-[10%] z-10">
            <SquareCorner>
              <>
                <p className="hero__name font-bold uppercase mx-2 text-center lg:text-left text-[#eaeeb2] md:background-black">
                  Ray Chung
                </p>
                <p className="text-3xl md:text-4xl font-light uppercase tracking-wider mx-2 pl-1 text-center lg:text-left text-white pb-3">
                  Software Engineer
                </p>
              </>
            </SquareCorner>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
