export interface ISkill {
  value: string;
  label: string;
  type: string;
  experience: number;
  loc?: number;
}

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
    value: "html",
    label: "HTML",
    type: "language",
    experience: 9,
    loc: 1000,
  },
  {
    value: "css",
    label: "CSS",
    type: "language",
    experience: 9,
    loc: 1000,
  },
  {
    value: "sql",
    label: "SQL",
    type: "language",
    experience: 6,
    loc: 1000,
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
];

export const frameworks: ISkill[] = [
  { value: "nextjs", label: "Next.js", type: "framework", experience: 8 },
  { value: "astro", label: "Astro", type: "framework", experience: 7 },
  {
    value: "spring",
    label: "Spring / Spring Boot",
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
  { value: "react", label: "React", type: "library", experience: 9 },
  { value: "redux", label: "Redux", type: "library", experience: 8 },
  {
    value: "tailwind",
    label: "Tailwind CSS",
    type: "framework",
    experience: 10,
  },
  { value: "numpy", label: "NumPy", type: "library", experience: 8 },
  { value: "trpc", label: "tRPC", type: "library", experience: 5 },
  { value: "zod", label: "Zod", type: "library", experience: 7 },
  { value: "prisma", label: "Prisma", type: "library", experience: 3 },
  { value: "nextauth", label: "NextAuth.js", type: "library", experience: 2 },
  { value: "cython", label: "Cython", type: "library", experience: 5 },
  { value: "pygame", label: "Pygame", type: "library", experience: 4 },
  { value: "jquery", label: "jQuery", type: "library", experience: 3 },
  {
    value: "mui",
    label: "Material UI",
    type: "library",
    experience: 8,
  },
  {
    value: "chartjs",
    label: "Chart.js",
    type: "library",
    experience: 6,
  },
];

export const tools: ISkill[] = [
  { value: "node", label: "Node.js", type: "runtime", experience: 8 },
  {
    value: "git",
    label: "Git",
    type: "version control",
    experience: 8,
  },
  { value: "linux", label: "Linux", type: "os", experience: 7 },
  { value: "windows", label: "Windows", type: "os", experience: 8 },

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

  { value: "junit", label: "JUnit", type: "testing", experience: 7 },
  {
    value: "cucumber",
    label: "Cucumber",
    type: "testing",
    experience: 1,
  },
  { value: "jest", label: "Jest", type: "testing", experience: 7 },

  { value: "heroku", label: "Heroku", type: "hosting", experience: 5 },
  {
    value: "netlify",
    label: "Netlify",
    type: "hosting",
    experience: 7,
  },
  {
    value: "vercel",
    label: "Vercel",
    type: "hosting",
    experience: 6,
  },
];
