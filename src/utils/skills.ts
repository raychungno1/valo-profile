import language from "../images/skill-bg/language.png";
import markup from "../images/skill-bg/markup.png";
import sql from "../images/skill-bg/sql.png";
import framework from "../images/skill-bg/framework.png";
import frontend from "../images/skill-bg/frontend.png";
import backend from "../images/skill-bg/backend.png";
import data from "../images/skill-bg/data.png";
import python from "../images/skill-bg/python.png";
import runtime from "../images/skill-bg/runtime.png";
import git from "../images/skill-bg/git.png";
import os from "../images/skill-bg/os.png";
import database from "../images/skill-bg/data.png";
import testing from "../images/skill-bg/testing.png";
import host from "../images/skill-bg/host.png";

export interface ISkill {
  value: string;
  label: string;
  type: string;
  experience: number;
  loc?: number;
}

export const skillTypes: {
  [key: string]: { pack: string; iconName: string; bg: string };
} = {
  language: { pack: "mdi", iconName: "file-document", bg: language },
  markup: { pack: "ri", iconName: "code-s-slash-fill", bg: markup },
  sql: { pack: "mdi", iconName: "database", bg: sql },

  framework: { pack: "mdi", iconName: "crane", bg: framework },

  frontend: { pack: "mdi", iconName: "google-chrome", bg: frontend },
  backend: { pack: "mdi", iconName: "server", bg: backend },
  data: { pack: "carbon", iconName: "chart-line-data", bg: data },
  python: { pack: "mdi", iconName: "language-python", bg: python },

  runtime: { pack: "ic", iconName: "baseline-play-circle", bg: runtime },
  git: { pack: "mdi", iconName: "git", bg: git },
  os: { pack: "jam", iconName: "cogs-f", bg: os },
  database: { pack: "mdi", iconName: "database", bg: database },
  testing: { pack: "mdi", iconName: "test-tube", bg: testing },
  host: { pack: "gis", iconName: "network", bg: host },
};

export const languages: ISkill[] = [
  {
    value: "python",
    label: "Python",
    type: "language",
    experience: 7,
    loc: 5000,
  },
  {
    value: "java",
    label: "Java",
    type: "language",
    experience: 8,
    loc: 5000,
  },
  {
    value: "ts",
    label: "TypeScript",
    type: "language",
    experience: 9,
    loc: 2000,
  },
  {
    value: "js",
    label: "JavaScript",
    type: "language",
    experience: 9,
    loc: 10000,
  },
  {
    value: "c",
    label: "C",
    type: "language",
    experience: 7,
    loc: 5000,
  },
  {
    value: "csharp",
    label: "C#",
    type: "language",
    experience: 6,
    loc: 5000,
  },
  {
    value: "ruby",
    label: "Ruby",
    type: "language",
    experience: 4,
    loc: 5000,
  },
  {
    value: "matlab",
    label: "Matlab",
    type: "language",
    experience: 6,
    loc: 3000,
  },
  {
    value: "swift",
    label: "Swift",
    type: "language",
    experience: 2,
    loc: 500,
  },
  {
    value: "asm",
    label: "Assembly",
    type: "language",
    experience: 2,
    loc: 500,
  },
  {
    value: "html",
    label: "HTML",
    type: "markup",
    experience: 9,
    loc: 1000,
  },
  {
    value: "css",
    label: "CSS",
    type: "markup",
    experience: 9,
    loc: 1000,
  },
  {
    value: "sql",
    label: "SQL",
    type: "sql",
    experience: 6,
    loc: 1000,
  },
];

export const frameworks: ISkill[] = [
  { value: "nextjs", label: "Next.js", type: "framework", experience: 8 },
  { value: "astro", label: "Astro", type: "framework", experience: 7 },
  {
    value: "spring",
    label: "Spring",
    type: "framework",
    experience: 7,
  },
  {
    value: "rails",
    label: "Ruby on Rails",
    type: "framework",
    experience: 6,
  },
  {
    value: "django",
    label: "Django",
    type: "framework",
    experience: 4,
  },
  {
    value: "flask",
    label: "Flask",
    type: "framework",
    experience: 5,
  },
  {
    value: "express",
    label: "Express.js",
    type: "framework",
    experience: 6,
  },
];

export const libs: ISkill[] = [
  { value: "react", label: "React", type: "frontend", experience: 9 },
  { value: "redux", label: "Redux", type: "frontend", experience: 8 },
  {
    value: "tailwind",
    label: "Tailwind",
    type: "frontend",
    experience: 10,
  },
  { value: "jquery", label: "jQuery", type: "frontend", experience: 3 },
  {
    value: "mui",
    label: "Material UI",
    type: "frontend",
    experience: 8,
  },
  {
    value: "chartjs",
    label: "Chart.js",
    type: "frontend",
    experience: 6,
  },
  { value: "numpy", label: "NumPy", type: "data", experience: 8 },
  { value: "pytorch", label: "PyTorch", type: "data", experience: 4 },
  { value: "trpc", label: "tRPC", type: "backend", experience: 5 },
  { value: "zod", label: "Zod", type: "backend", experience: 7 },
  { value: "prisma", label: "Prisma", type: "backend", experience: 3 },
  { value: "nextauth", label: "NextAuth", type: "backend", experience: 2 },
  { value: "cython", label: "Cython", type: "python", experience: 5 },
  { value: "pygame", label: "Pygame", type: "python", experience: 4 },
];

export const tools: ISkill[] = [
  {
    value: "postgresql",
    label: "PostgreSQL",
    type: "database",
    experience: 7,
  },
  { value: "mysql", label: "MySQL", type: "database", experience: 7 },
  {
    value: "oracle",
    label: "Oracle",
    type: "database",
    experience: 7,
  },
  {
    value: "firebase",
    label: "Firebase",
    type: "database",
    experience: 2,
  },
  {
    value: "mongo",
    label: "Mongo DB",
    type: "database",
    experience: 2,
  },
  {
    value: "planetscale",
    label: "PlanetScale",
    type: "database",
    experience: 2,
  },

  { value: "junit", label: "JUnit", type: "testing", experience: 7 },
  {
    value: "cucumber",
    label: "Cucumber",
    type: "testing",
    experience: 1,
  },
  { value: "jest", label: "Jest", type: "testing", experience: 7 },

  { value: "heroku", label: "Heroku", type: "host", experience: 5 },
  {
    value: "netlify",
    label: "Netlify",
    type: "host",
    experience: 7,
  },
  {
    value: "vercel",
    label: "Vercel",
    type: "host",
    experience: 6,
  },

  { value: "node", label: "Node.js", type: "runtime", experience: 8 },
  {
    value: "git",
    label: "Git",
    type: "git",
    experience: 8,
  },
  {
    value: "github",
    label: "Github",
    type: "git",
    experience: 8,
  },
  {
    value: "bitbucket",
    label: "Bitbucket",
    type: "git",
    experience: 6,
  },
  { value: "linux", label: "Linux", type: "os", experience: 7 },
  { value: "windows", label: "Windows", type: "os", experience: 8 },
  { value: "mac", label: "Mac", type: "os", experience: 8 },
];
