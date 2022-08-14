export interface AboutInfo {
  company: string;
  title: string;
  date: string;
  points: string[];
}

export const aboutMe =
  "I'm a software developer studying Computer Science and Engineering at the Ohio State University. I love both front-end and back-end development, and have a big interest in machine learning and AI.";

export const experiences = [
  {
    company: "JP Morgan Chase",
    title: "Software Engineer Intern",
    date: "June - August 2022",
    points: [
      "Developed a web application with Java Spring Boot, Node, & React to summarize loan application data",
      "Within one week of use, tool identified a bottleneck affecting 60% of automated loan applications, increasing automated loan approvals by 10%",
      "Implemented a solution to store loan application data in the cloud, creating a schema & automating data storage in an Oracle database",
      "Decreased app maintenance 33% by developing a Spring Boot Admin monitoring tool for microservices",
      "Selected as a top 2 intern project among 113 interns and 33 teams",
    ],
  },
];

export const education = [
  {
    company: "Ohio State University",
    title: "B.S. Computer Science",
    date: "August 2019 - May 2023",
    points: [
      "Computer Science & Engineering major w/ AI specialization",
      "Major GPA: 4.0 | Cumulative GPA: 3.9",
      "Expected graduation: May 2023",
    ],
  },
];

export const awards = [
  {
    company: "ASA DataFest",
    title: "Winner",
    date: "March 2021",
    points: [
      "Won best visualization award among 35 teams",
      "Performed data analysis with RStudio, providing business insights to an anonymous data provider",
      "Used statistical techniques to identify issues and developed actionable conclusions",
    ],
  },
  {
    company: "PLTW Engineering",
    title: "Winner",
    date: "August 2018 - May 2019",
    points: [
      "Won audience choice award among 30 teams",
      "Cooperated in a team of 4 to produce a garage door add-on that automatically operated a garage door",
      "Developed a fully functional app through Swift using XCode with a customizable, toggleable geo-fence",
    ],
  },
  {
    company: "Boy Scouts of America",
    title: "Eagle Scout",
    date: "May 2016",
    points: [
      "Refurbished a Tzu Chi recycling center in Shanghai, China",
      "Created signage & samples to streamline recycling process for volunteers",
    ],
  },
];
