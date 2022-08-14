import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import { BiError } from "react-icons/bi";

import FeaturedProject from "./components/FeaturedProject";
import { projectList, ProjectProps } from "./projects";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./styles.css";
import Project from "./components/Project";
import { useSearchParams } from "react-router-dom";

const options = [
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "ts", label: "TypeScript" },
  { value: "js", label: "JavaScript" },
  { value: "c", label: "C" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "sql", label: "SQL" },
  { value: "csharp", label: "C#" },
  { value: "ruby", label: "Ruby" },
  { value: "swift", label: "Swift" },
  { value: "asm", label: "Assembly" },
];

const selectStyles = {
  menu: (provided: any) => ({
    ...provided,
    background: "#3d4044",
    color: "white",
    zIndex: 100,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    background: "#3d4044",
    padding: "0.75rem 1.5rem",
    border: "none",
    boxShadow: "none",
    outline: state.isFocused ? "2px solid #464a4d" : "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isSelected ? "#7cc5c3" : "none",
    "&:hover": {
      background: state.isSelected ? "#7cc5c3" : "rgb(124, 197, 195, 0.5)",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    margin: 0,
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    margin: 0,
    padding: 0,
    paddingLeft: 8,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
    margin: 0,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "rgb(255, 255, 255, 0.5)",
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    padding: 0,
    paddingRight: 8,
  }),
};

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { width } = useWindowDimensions();
  const projectsRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(searchParams.get("filter") || "");

  useEffect(() => {
    if (filter) {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }, [filter, setSearchParams]);

  const validProject = (proj: ProjectProps) => {
    return (
      (proj.title.toLowerCase().includes(search.toLowerCase()) ||
        proj.desc.toLowerCase().includes(search.toLowerCase())) &&
      (!filter || proj.skills.includes(filter))
    );
  };

  const filteredProjects = projectList.filter((proj) => validProject(proj));

  return (
    <motion.div
      className="container m-auto pt-14 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
    >
      {width >= 1024 && (
        <div className="flex justify-between mb-32">
          <FeaturedProject level={3} position={1} {...projectList[0]} />
          <FeaturedProject level={2} position={2} {...projectList[1]} />
          <FeaturedProject level={1} position={3} {...projectList[2]} />
          <FeaturedProject level={2} position={4} {...projectList[3]} />
          <FeaturedProject level={3} position={5} {...projectList[4]} />
        </div>
      )}
      <div className="search__container min-h-[80vh] mb-32">
        <div className="search__container-bottom" ref={projectsRef}>
          <p className="w-full text-center uppercase text-white mt-6 mb-4 text-4xl">
            All Projects
          </p>
          <div className="w-full bg-[#181c20] flex gap-6 items-start justify-center py-6">
            <div className="w-2/5">
              <Select
                options={options}
                styles={selectStyles}
                isClearable
                defaultValue={options.find((option) => option.value === filter)}
                placeholder="Languages..."
                onChange={(e: any) => setFilter(e?.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Search Projects"
              className="search__input"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          {filteredProjects.length ? (
            <div className="p-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 text-white">
              {filteredProjects.map((proj, i) => (
                <Project key={i} {...proj} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-white text-opacity-60 flex flex-col items-center justify-center">
              <BiError className="text-6xl" />
              <p>No Projects</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
