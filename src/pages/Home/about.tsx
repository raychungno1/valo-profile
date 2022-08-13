export interface AboutInfo {
  company: string;
  title: string;
  date: string;
  points: string[];
}

export const experiences = [
  {
    company: "JP Morgan Chase",
    title: "Software Engineer Intern",
    date: "June - August 2022",
    points: [
      "Decreased app maintenance time by developing a monitoring tool for microservices",
      "Developed a full stack admin dashboard to summarize lending data and approval rates, in production",
      "Implemented a solution to store lending data in the cloud, creating a schema and automating data storage in an Oracle database",
      "Performed unit and integration testing to reach production code coverage requirements",
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
      "Won best visualization award (1st of 35 teams)",
      "Performed data analysis with RStudio, providing business insights to an anonymous data provider",
      "Used statistical techniques to identify issues and developed actionable conclusions",
    ],
  },
  {
    company: "PLTW Engineering",
    title: "Winner",
    date: "August 2018 - May 2019",
    points: [
      "Won audience choice award (1st of 30 teams)",
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
