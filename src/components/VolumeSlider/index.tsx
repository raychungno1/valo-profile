import React, { useState } from "react";
import { IoMdVolumeOff, IoMdVolumeLow, IoMdVolumeHigh } from "react-icons/io";

import "./styles.css";

interface IProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  vertical?: boolean;
}

const VolumeSlider = ({ volume, setVolume, vertical }: IProps) => {
  const [prevVolume, setPrevVolume] = useState(0);
  const icon = volume ? (
    volume > 50 ? (
      <IoMdVolumeHigh />
    ) : (
      <IoMdVolumeLow />
    )
  ) : (
    <IoMdVolumeOff />
  );

  const toggleMute = () => {
    if (volume) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume);
    }
  };

  return (
    <div className={vertical ? "w-12 h-12 hover:h-36" : ""}>
      <div
        className={`volume-slider__container h-12 flex ${
          vertical ? "vertical" : "horizontal"
        } items-center justify-center w-min`}
      >
        <div
          className={`p-[6px] text-4xl text-white cursor-pointer ${
            vertical ? " -rotate-90" : ""
          }`}
          onClick={toggleMute}
        >
          {icon}
        </div>
        <div className={`volume-slider__inner`}>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
            className="volume-slider my-4 max-w-[4rem]"
            style={{
              background: `linear-gradient(90deg, rgb(255, 255, 255) ${volume}%, rgb(255, 255, 255, 0.2) ${volume}%)`,
            }}
            onMouseDown={() => setPrevVolume(volume)}
            dir="vertical"
          />
        </div>
      </div>
    </div>
  );
};

export default VolumeSlider;
