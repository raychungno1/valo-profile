import backend from "../images/skill-bg/backend.png";
import data from "../images/skill-bg/data.png";
import database from "../images/skill-bg/sql.png";
import framework from "../images/skill-bg/framework.png";
import frontend from "../images/skill-bg/frontend.png";
import git from "../images/skill-bg/git.png";
import host from "../images/skill-bg/host.png";
import language from "../images/skill-bg/language.png";
import markup from "../images/skill-bg/markup.png";
import os from "../images/skill-bg/os.png";
import python from "../images/skill-bg/python.png";
import runtime from "../images/skill-bg/runtime.png";
import sql from "../images/skill-bg/sql.png";
import testing from "../images/skill-bg/testing.png";

export const skillTypes: {
  [k: string]: { pack: string; iconName: string; bg: ImageMetadata };
} = {
  language: {
    pack: "mdi",
    iconName: "file-document",
    bg: language,
  },
  markup: {
    pack: "ri",
    iconName: "code-s-slash-fill",
    bg: markup,
  },
  sql: {
    pack: "mdi",
    iconName: "database",
    bg: sql,
  },

  framework: {
    pack: "mdi",
    iconName: "crane",
    bg: framework,
  },

  frontend: {
    pack: "mdi",
    iconName: "google-chrome",
    bg: frontend,
  },
  backend: {
    pack: "mdi",
    iconName: "server",
    bg: backend,
  },
  data: {
    pack: "carbon",
    iconName: "chart-line-data",
    bg: data,
  },
  python: {
    pack: "mdi",
    iconName: "language-python",
    bg: python,
  },

  runtime: {
    pack: "ic",
    iconName: "baseline-play-circle",
    bg: runtime,
  },
  git: {
    pack: "mdi",
    iconName: "git",
    bg: git,
  },
  os: {
    pack: "jam",
    iconName: "cogs-f",
    bg: os,
  },
  database: {
    pack: "mdi",
    iconName: "database",
    bg: database,
  },
  testing: {
    pack: "mdi",
    iconName: "test-tube",
    bg: testing,
  },
  host: {
    pack: "gis",
    iconName: "network",
    bg: host,
  },
};
