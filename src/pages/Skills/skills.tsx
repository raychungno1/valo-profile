export interface ISkill {
  value: string;
  label: string;
  type: string;
  experience: string;
  loc?: number;
}

export const languages: ISkill[] = [
  {
    value: "python",
    label: "Python",
    type: "language",
    experience: "confident",
    loc: 5000,
  },
  {
    value: "java",
    label: "Java",
    type: "language",
    experience: "confident",
    loc: 5000,
  },
  {
    value: "ts",
    label: "TypeScript",
    type: "language",
    experience: "confident",
    loc: 2000,
  },
  {
    value: "js",
    label: "JavaScript",
    type: "language",
    experience: "confident",
    loc: 10000,
  },
  {
    value: "c",
    label: "C",
    type: "language",
    experience: "confident",
    loc: 5000,
  },
  {
    value: "html",
    label: "HTML",
    type: "language",
    experience: "confident",
    loc: 1000,
  },
  {
    value: "css",
    label: "CSS",
    type: "language",
    experience: "confident",
    loc: 1000,
  },
  {
    value: "sql",
    label: "SQL",
    type: "language",
    experience: "familiar",
    loc: 1000,
  },
  {
    value: "csharp",
    label: "C#",
    type: "language",
    experience: "familiar",
    loc: 5000,
  },
  {
    value: "ruby",
    label: "Ruby",
    type: "language",
    experience: "familiar",
    loc: 5000,
  },
  {
    value: "swift",
    label: "Swift",
    type: "language",
    experience: "novice",
    loc: 500,
  },
  {
    value: "asm",
    label: "Assembly",
    type: "language",
    experience: "novice",
    loc: 500,
  },
];

export const frameworks: ISkill[] = [
  {
    value: "springboot",
    label: "Spring Boot",
    type: "framework",
    experience: "confident",
  },
  {
    value: "rails",
    label: "Ruby on Rails",
    type: "framework",
    experience: "confident",
  },
  {
    value: "django",
    label: "Django",
    type: "framework",
    experience: "familiar",
  },
  { value: "react", label: "React", type: "library", experience: "confident" },
  { value: "redux", label: "Redux", type: "library", experience: "confident" },
  { value: "cython", label: "Cython", type: "library", experience: "familiar" },
  { value: "pygame", label: "Pygame", type: "library", experience: "familiar" },
  { value: "numpy", label: "NumPy", type: "library", experience: "familiar" },
  { value: "jquery", label: "jQuery", type: "library", experience: "familiar" },
  {
    value: "chartjs",
    label: "Chart.js",
    type: "library",
    experience: "familiar",
  },
];

export const tools: ISkill[] = [
  { value: "node", label: "NodeJS", type: "runtime", experience: "confident" },
  {
    value: "git",
    label: "Git",
    type: "version control",
    experience: "confident",
  },
  { value: "linux", label: "Linux", type: "os", experience: "confident" },
  { value: "windows", label: "Windows", type: "os", experience: "confident" },

  {
    value: "postgresql",
    label: "PostgreSQL",
    type: "database",
    experience: "familiar",
  },
  { value: "mysql", label: "MySQL", type: "database", experience: "familiar" },
  {
    value: "oracle",
    label: "Oracle",
    type: "database",
    experience: "confident",
  },
  {
    value: "firebase",
    label: "Firebase",
    type: "database",
    experience: "novice",
  },

  { value: "junit", label: "JUnit", type: "testing", experience: "confident" },
  {
    value: "cucumber",
    label: "Cucumber",
    type: "testing",
    experience: "familiar",
  },
  { value: "jest", label: "Jest", type: "testing", experience: "confident" },

  { value: "heroku", label: "Heroku", type: "hosting", experience: "familiar" },
  {
    value: "netlify",
    label: "Netlify",
    type: "hosting",
    experience: "familiar",
  },
];
