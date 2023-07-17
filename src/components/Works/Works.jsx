import React, { useContext } from "react";
import "./Works.css";
import javascript from "../../img/javascript.png";
import express from "../../img/express.png";
import react from "../../img/react.png";
import mongodb from "../../img/mongodb.png";
import java from "../../img/java.png";
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
          I am a skilled MERN stack developer with expertise in building scalable web applications
            <br />
            With a solid understanding of MongoDB, Express.js, React, and Node.js
            text
            <br />
            I am passionate about creating user-friendly websites
            <br />
            As a MERN stack developer with a strong foundation in Java, 
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
            <img src={express} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={java} alt="" />
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
