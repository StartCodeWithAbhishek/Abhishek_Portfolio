import React, { useContext } from "react";
import "./Works.css";
import javascript from "../../img/javascript.png";
import gitlab from "../../img/gitlab.png";
import react from "../../img/react.png";
import SQL from "../../img/SQL.png";
import springBoot from "../../img/springBoot.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works in All these
          </span>
          <span> technology</span>
          <spane>
          Backend Developer with 1 year of experience in building scalable banking applications
            <br />
            using Java, Spring Boot, REST APIs, Microservices, and MySQL
            <br />
            Skilled in backend development, API optimization, production issue resolution, and Agile-based software delivery
            <br />
             Also as a MERN stack developer with a strong foundation in Java, 
            <br/>
            I am well-equipped to contribute to innovative and dynamic projects
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={gitlab} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={SQL} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={springBoot} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
