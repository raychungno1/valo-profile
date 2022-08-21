// Project BG
import dataStructs from "../images/project-bg/data-structs.jpg";
import amazonClone from "../images/project-bg/amz-clone.png";
import chessAI from "../images/project-bg/chess-ai.png";
import AI_ML from "../images/project-bg/ai-ml.png";
import trustDoor from "../images/project-bg/trust-door1.png";
import peerEval from "../images/project-bg/peer-eval.png";
import voronoi from "../images/project-bg/voronoi.png";
import core from "../images/project-bg/core.png";
import cryptoverse from "../images/project-bg/cryptoverse.png";
import mernMemories from "../images/project-bg/mern-memories.png";
import valoProfile from "../images/project-bg/valo-profile.png";
import tikTokClone from "../images/project-bg/tik-tok-clone.png";
import mernAuth from "../images/project-bg/mern-auth.png";

export interface ProjectProps {
  title: string;
  desc: string;
  code?: string;
  demo?: string;
  skills: string[];
  bg?: string;
}

export const projectList: ProjectProps[] = [
  {
    title: "Tik Tok Clone",
    desc: "A clone of the Tik Tok social media platform.",
    code: "https://github.com/raychungno1/tik-tok-clone",
    demo: "https://raychungno1-tik-tok-clone.vercel.app/",
    skills: ["html", "css", "ts", "react", "tailwind", "nextjs", "vercel"],
    bg: tikTokClone,
  },
  {
    title: "Amazon Clone",
    desc: "A replication of Amazon's Ecommerce website",
    code: "https://github.com/raychungno1/amazon-clone",
    demo: "https://clone-5a6d3.web.app/",
    skills: ["html", "css", "js", "react", "firebase"],
    bg: amazonClone,
  },
  {
    title: "Chess AI",
    desc: "A chess engine playing that performs at a 1700 rating on chess.com.",
    code: "https://github.com/raychungno1/chess-ai",
    demo: "https://youtu.be/oOvJXMsbHoo/",
    skills: ["python", "c", "cython", "pygame"],
    bg: chessAI,
  },
  {
    title: "AI Visualizer",
    desc: "A showcase of popular search algorithms and K-Means clustering.",
    code: "https://github.com/raychungno1/ML-Visualizer",
    demo: "https://raychungno1.github.io/ML-Visualizer/",
    skills: ["html", "css", "js"],
    bg: AI_ML,
  },
  {
    title: "MERN Auth",
    desc: "A template authentication flow using the MERN stack.",
    code: "https://github.com/raychungno1/mern-authentication",
    demo: "https://raychungno1-mern-auth.netlify.app/",
    skills: ["html", "css", "js", "ts", "mongo", "express", "react", "node"],
    bg: mernAuth,
  },
  {
    title: "Trust Door",
    desc: "A mobile application that operates a garage door.",
    code: "https://github.com/raychungno1/TrustDoor",
    skills: ["swift"],
    bg: trustDoor,
  },
  {
    title: "Profile",
    desc: "A valorant-inspired profile webpage (the site you're on right now)!",
    skills: ["html", "css", "ts", "react", "tailwind", "mui", "netlify"],
    code: "https://github.com/raychungno1/valo-profile",
    demo: "https://raychungno1.netlify.app/",
    bg: valoProfile,
  },
  {
    title: "Learning Manager",
    desc: "A learning management system web application.",
    skills: [
      "html",
      "css",
      "js",
      "jquery",
      "ruby",
      "rails",
      "postgresql",
      "heroku",
    ],
    bg: peerEval,
  },
  {
    title: "Voronoi",
    desc: "A webpage that generates a voronoi diagram using Fortune's Algorithm. Calculated in O(n * log(n)) time using red-black trees.",
    skills: ["html", "css", "js"],
    code: "https://github.com/raychungno1/Voronoi",
    demo: "https://raychungno1.github.io/Voronoi/",
    bg: voronoi,
  },
  {
    title: "CORE",
    desc: "An interpreted programming language coded in Python.",
    skills: ["python"],
    code: "https://github.com/raychungno1/CORE-interpreter",
    bg: core,
  },
  {
    title: "Cryptoverse",
    desc: "An React web application displaying cryptocurrency information.",
    skills: ["html", "css", "js", "react", "redux", "chartjs"],
    demo: "https://raychungno1-cryptoverse.netlify.app/",
    bg: cryptoverse,
  },
  {
    title: "Mern Memories",
    desc: "An social media application developed with the MERN stack.",
    skills: [
      "html",
      "css",
      "js",
      "react",
      "redux",
      "node",
      "netlify",
      "heroku",
    ],
    demo: "https://raychungno1-mern-memories.netlify.app/posts",
    bg: mernMemories,
  },
  {
    title: "Data Structs",
    desc: "A library of data structures implemented in C.",
    code: "https://github.com/raychungno1/DataStructs",
    skills: ["c", "linux"],
    bg: dataStructs,
  },
];
