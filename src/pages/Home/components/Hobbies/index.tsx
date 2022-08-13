import React from "react";
import ReactPlayer from "react-player";

import SquareCorner from "../../../../components/SquareCorner";

import YtLogo from "../../../../images/yt-logo.jpg";

const Hobbies = () => {
  return (
    <div>
      <p className="text-2xl font-bold tracking-wider pl-1 text-white">
        Hobbies
      </p>
      <SquareCorner className="m-4 mb-12">
        <div className="w-full text-white p-4">
          <p className="text-2xl font-bold w-full mb-4">Youtube</p>
          <a
            href="https://www.youtube.com/c/legendaray"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-white bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-20 flex gap-2 sm:gap-6 items-center">
              <img src={YtLogo} alt="yt logo" className="w-20" />
              <div>
                <div className="text-2xl font-bold">Legendaray</div>
                <div className="text-sm uppercase">Check out my channel!</div>
              </div>
            </div>
          </a>
        </div>
      </SquareCorner>
      <SquareCorner className="m-4">
        <div className="w-full text-white p-4">
          <p className="text-2xl font-bold w-full mb-4">Origami</p>
          <div className="relative">
            <div className="absolute w-full" />
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Suly8B2P6fc"
              loop
              controls
              width="100%"
            />
          </div>
        </div>
      </SquareCorner>
    </div>
  );
};

export default Hobbies;
