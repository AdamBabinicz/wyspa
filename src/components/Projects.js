import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/21.jpg";
import img2 from "../assets/20.jpg";
import img3 from "../assets/22.jpg";
import img4 from "../assets/24.jpg";
import "./Projects.css";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    name: "Postacie autentyczne",
    img: img1,
    to: "/postacie",
  },
  {
    id: 2,
    name: "Streszczenie",
    img: img2,
    to: "/streszczenie",
  },
  {
    id: 3,
    name: "Geneza, problematyka",
    img: img3,
    to: "/geneza",
  },
  {
    id: 4,
    name: "Dramat symboliczny",
    img: img4,
    to: "/symbol",
  },
];

const Projects = () => {
  const handleClick = (url) => {
    window.open(url);
  };

  return (
    <div className="projects">
      <div className="project-heading">
        <h2>Opracowania</h2>
        <div className="bottom-line-p"></div>
      </div>
      <div className="project-grid">
        {projectsData.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={item.id}
            // onClick={() => handleClick(item.to)}
          >
            <Link to={item.to}>
              <img src={item.img} alt="..." />
            </Link>
            <p>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
