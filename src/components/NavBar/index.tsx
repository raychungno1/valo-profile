import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import SquareCorner from "../SquareCorner";
import ReactPlayer from "react-player";

import "./styles.css";
import HomeBg from "../../images/home-bg.png";

const NavBar = () => {
  const path = useLocation().pathname;
  const [open, setOpen] = useState(false);
  const [slideClass, setSlideClass] = useState("nav__slider");
  const [smallMenu, setSmallMenu] = useState(false);
  const [menuZ, setMenuZ] = useState("z-40");

  const { width } = useWindowDimensions();

  useEffect(() => {
    setOpen(width >= 1024);
    setSmallMenu(width < 1024);
    if (width < 1024) {
      setSlideClass("nav__slider-initial");
      setTimeout(() => {
        setSlideClass("nav__slider");
      }, 100);
    }
  }, [width]);

  useEffect(() => {
    if (open) {
      setMenuZ("z-40");
    } else {
      setTimeout(() => {
        setMenuZ("z-0");
      }, 500);
    }
  }, [open]);

  const navShared =
    "flex items-center justify-center h-auto lg:h-full uppercase md:font-semibold my-2 lg:my-0";

  const [videoVisible, setVideoVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    if (videoVisible === true) {
      setTimeout(() => {
        setImageVisible(false);
      }, 500);
    }
  }, [videoVisible]);

  return (
    <>
      <div
        className={`video-bg -mt-16 lg:ml-0 ${
          videoVisible && path === "/" ? "" : "opacity-0"
        }`}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=KcFY64yX2bI"
          playing
          loop
          muted
          width="100%"
          height="100%"
          onStart={() => setVideoVisible(true)}
          onError={() => {
            setVideoVisible(false);
            setImageVisible(true);
          }}
        />
      </div>
      <img
        className={`video-img object-cover ${
          path === "/" && imageVisible ? "" : "opacity-0"
        }`}
        src={HomeBg}
        alt="home bg"
      />
      <div className="lg:hidden absolute left-[5vw] top-[5vw] z-50">
        <SquareCorner changeColorOnHover defaultHover color="green">
          <Hamburger toggled={open} toggle={setOpen} size={32} color="white" />
        </SquareCorner>
      </div>
      <div
        className={`absolute bottom-0 w-full z-40`}
      >
        <div className="absolute right-[5vw] lg:right-[5vh] bottom-[5vh]">
          <SquareCorner
            defaultHover
            className="w-12 py-1 text-4xl text-white flex flex-col items-center gap-4"
          >
            <>
              <a
                href="https://linkedin.com/in/raychungno1"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="m-1" />
              </a>
              <a
                href="https://github.com/raychungno1"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="m-1" />
              </a>
              {/* <VolumeSlider volume={volume} setVolume={setVolume} vertical /> */}
            </>
          </SquareCorner>
        </div>
      </div>
      <div
        className={`nav__container fixed lg:static w-full top-0 ${menuZ} ${
          open
            ? "backdrop-blur-sm bg-black bg-opacity-50 lg:bg-transparent"
            : ""
        }`}
      >
        <div
          className={`${slideClass}${
            open ? "-active" : ""
          } flex lg:gap-16 flex-col lg:flex-row items-center justify-center h-[100vh] lg:h-14`}
        >
          <div className="nav__home order-first lg:order-none">
            {smallMenu ? (
              <SquareCorner animated changeColorOnHover>
                <Link
                  to="/"
                  onClick={() => setOpen(width >= 1024)}
                  className={`${navShared} nav__home-inner ${
                    path === "/" && "nav__selected-home"
                  }`}
                >
                  <p className="cursor-pointer z-10 w-[50vw] text-center my-4">
                    Home
                  </p>
                </Link>
              </SquareCorner>
            ) : (
              <Link
                to="/"
                onClick={() => setOpen(width >= 1024)}
                className={`${navShared} nav__home-inner ${
                  path === "/" && "nav__selected-home"
                }`}
              >
                <p className="cursor-pointer z-10">Home</p>
              </Link>
            )}
          </div>
          <div
            className={`${navShared} nav__normal ${
              path === "/projects" && "nav__selected"
            }`}
          >
            {smallMenu ? (
              <SquareCorner animated changeColorOnHover>
                <Link to="/projects" onClick={() => setOpen(width >= 1024)}>
                  <p className="cursor-pointer w-[50vw] text-center my-4">
                    Projects
                  </p>
                </Link>
              </SquareCorner>
            ) : (
              <Link to="/projects" onClick={() => setOpen(width >= 1024)}>
                <p className="cursor-pointer">Projects</p>
              </Link>
            )}
          </div>
          <div
            className={`${navShared} nav__normal ${
              path === "/skills" && "nav__selected"
            }`}
          >
            {smallMenu ? (
              <SquareCorner animated changeColorOnHover>
                <Link to="/skills" onClick={() => setOpen(width >= 1024)}>
                  <p className="cursor-pointer w-[50vw] text-center my-4">
                    Skills
                  </p>
                </Link>
              </SquareCorner>
            ) : (
              <Link to="/skills" onClick={() => setOpen(width >= 1024)}>
                <p className="cursor-pointer">Skills</p>
              </Link>
            )}
          </div>
          <div
            className={`${navShared} nav__normal ${
              path === "/contact" && "nav__selected"
            }`}
          >
            {smallMenu ? (
              <SquareCorner animated changeColorOnHover>
                <Link to="/contact" onClick={() => setOpen(width >= 1024)}>
                  <p className="cursor-pointer w-[50vw] text-center my-4">
                    Contact
                  </p>
                </Link>
              </SquareCorner>
            ) : (
              <Link to="/contact" onClick={() => setOpen(width >= 1024)}>
                <p className="cursor-pointer">Contact</p>
              </Link>
            )}
          </div>
          <div className="my-2 text-4xl lg:text-2xl text-white flex items-center justify-center gap-12">
            <a
              href="https://linkedin.com/in/raychungno1"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="m-1" />
            </a>
            <a
              href="https://github.com/raychungno1"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="m-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
