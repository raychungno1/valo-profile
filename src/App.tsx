import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
// import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();

  return (
    <div>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
