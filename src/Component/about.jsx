//about section

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaHeart,
} from "react-icons/fa";
// import './about.css'

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "HTML5", level: 90 },
    { name: "CSS3/SASS", level: 85 },
    { name: "Git & GitHub", level: 75 },
    { name: "Responsive Design", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Node.js", level: 60 },
    { name: "MongoDB", level: 55 },
    { name: "RESTful APIs", level: 70 },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Bhaktkavi Narshimata University",
      period: "2019 - 2023",
      description:
        "Focused on computer science fundamentals, programming languages, and web development technologies.",
    },
    {
      degree: "MERN Stack Development",
      institution: "Grras Solution",
      period: "2024",
      description:
        "Intensive training in MongoDB, Express, React, and Node.js stack development with practical projects.",
    },
    {
      degree: "JavaScript Algorithms and Data Structures",
      institution: "freeCodeCamp",
      period: "2022",
      description:
        "Certification covering JavaScript fundamentals, algorithms, and data structures implementation.",
    },
  ];

  const interests = [
    "Reading tech blogs and staying updated with industry trends",
    "Contributing to open-source projects",
    "Solving coding challenges on platforms like LeetCode",
    "Exploring new web technologies and frameworks",
    "Attending tech meetups and workshops",
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const tabVariants = {
    inactive: { opacity: 0, y: 20, display: "none" },
    active: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.5 },
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <motion.div
      className="about-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="about-hero">
        <motion.div
          className="about-text-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-greeting">Hello, I'm</span>
          <h1 className="about-name">Vishal Bhatt</h1>
          <h2 className="about-title">Frontend Developer</h2>
          <p className="about-bio">
            As a fresh BCA graduate with a passion for web development, I'm
            excited to start my journey in the tech industry. I've focused on
            building a strong foundation in JavaScript, React, and modern
            front-end technologies through coursework, personal projects, and
            online learning.
          </p>
          <div className="about-social">
            <a
              href="https://github.com/VishalBhatt09"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-bhatt09/"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/vishaall_bhatt_9?"
              className="social-icon"
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:vishalbhatt829@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-wrapper">
            <div className="about-image-placeholder"></div>
            <div className="image-decoration"></div>
          </div>
        </motion.div>
      </div>

      <div className="about-tabs-container">
        <div className="about-tabs">
          <button
            className={`about-tab ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => handleTabChange("skills")}
          >
            <FaCode /> Skills
          </button>
          <button
            className={`about-tab ${activeTab === "education" ? "active" : ""}`}
            onClick={() => handleTabChange("education")}
          >
            <FaGraduationCap /> Education
          </button>
          <button
            className={`about-tab ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => handleTabChange("experience")}
          >
            <FaBriefcase /> Experience
          </button>
          <button
            className={`about-tab ${activeTab === "interests" ? "active" : ""}`}
            onClick={() => handleTabChange("interests")}
          >
            <FaHeart /> Interests
          </button>
        </div>

        <div className="about-tab-content">
          <motion.div
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "skills" ? "active" : "inactive"}
            className="tab-panel"
          >
            <h3 className="tab-title">Technical Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.span
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                    ></motion.span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "education" ? "active" : "inactive"}
            className="tab-panel"
          >
            <h3 className="tab-title">Education & Certifications</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{item.degree}</h4>
                    <p className="timeline-place">{item.institution}</p>
                    <p className="timeline-date">{item.period}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "experience" ? "active" : "inactive"}
            className="tab-panel"
          >
            <h3 className="tab-title">Work Experience</h3>
            <div className="experience-cards">
              <div className="experience-card">
                <div className="experience-header">
                  <h4>Freelance Web Developer</h4>
                  <p className="experience-duration">2022 - Present</p>
                </div>
                <p className="experience-description">
                  Working on various frontend development projects for clients,
                  implementing responsive designs and interactive features using
                  modern technologies.
                </p>
                <div className="tech-used">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS3</span>
                  <span>HTML5</span>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <h4>Web Development Intern</h4>
                  <p className="experience-duration">2023 (3 months)</p>
                </div>
                <p className="experience-description">
                  Assisted in developing and maintaining client websites,
                  collaborated with a team of developers on various projects,
                  and learned industry best practices.
                </p>
                <div className="tech-used">
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Bootstrap</span>
                  <span>Git</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === "interests" ? "active" : "inactive"}
            className="tab-panel"
          >
            <h3 className="tab-title">My Interests</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div
                  className="interest-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="interest-icon">
                    <span>{index + 1}</span>
                  </div>
                  <p>{interest}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
