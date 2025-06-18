import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const experienceSlider = useRef(null);
  const jobsData = [
    {
      title: "Personal Portfolio Website",
      role: "React Developer",
      duration: "2023 - Present",
      description:
        "Designed and developed a personal portfolio website using React, showcasing my projects and skills.",
      skills: ["React", "CSS3", "Responsive Design"],
    },
    {
      title: "E-commerce Product Page",
      role: "Frontend Developer",
      duration: "2023",
      description:
        "Created a responsive product listing page with filter functionality using React and CSS Grid.",
      skills: ["React", "CSS Grid", "JavaScript"],
    },
    {
      title: "University Web Development Club",
      role: "Student Member",
      duration: "2022 - 2023",
      description:
        "Collaborated with peers on various web projects and participated in coding competitions.",
      skills: ["HTML/CSS", "JavaScript", "Team Collaboration"],
    },
    {
      title: "Freelance Web Developer",
      role: "Independent Contractor",
      duration: "2021 - 2022",
      description:
        "Worked with small businesses to create custom websites and improve their online presence.",
      skills: ["WordPress", "SEO", "Client Management"],
    },
  ];

  const projectsData = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, featuring smooth animations and a mobile-friendly design.",
      image: "portfolio-placeholder.jpg",
      liveLink: "/",
      githubLink: "/",
    },
    {
      title: "E-commerce Product Page",
      description:
        "A responsive product listing page with filtering capabilities built using React and CSS Grid.",
      image: "ecommerce-placeholder.jpg",
      liveLink: "/",
      githubLink: "/",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays current weather conditions and forecasts using a public API.",
      image: "weather-placeholder.jpg",
      liveLink: "/",
      githubLink: "/",
    },
    {
      title: "Task Management App",
      description:
        "A full-stack application for managing tasks and projects with user authentication.",
      image: "task-placeholder.jpg",
      liveLink: "/",
      githubLink: "/",
    },
    {
      title: "Recipe Finder",
      description:
        "An application that allows users to search for recipes based on ingredients they have.",
      image: "recipe-placeholder.jpg",
      liveLink: "/",
      githubLink: "/",
    },
    {
      title: "Blog Platform",
      description:
        "A blog platform with a content management system built using the MERN stack.",
      image: "blog-placeholder.jpg",
      liveLink: "/",
      githubLink: "/",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === jobsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? jobsData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slider = experienceSlider.current;
    if (slider) {
      const slideWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
    out: {
      opacity: 0,
      y: "100vh",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="projects-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="projects-content">
        <motion.section
          className="page-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Projects & Experience</h1>
          <p className="page-description">
            A showcase of my projects and professional experiences.
          </p>
        </motion.section>

        <motion.section
          className="experience-carousel-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="section-title">Work Experience</h2>

          <div className="experience-carousel">
            <div className="carousel-controls">
              <button className="carousel-control prev-btn" onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <div className="carousel-indicators">
                {jobsData.map((_, index) => (
                  <span
                    key={index}
                    className={`carousel-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  ></span>
                ))}
              </div>
              <button className="carousel-control next-btn" onClick={nextSlide}>
                <FaArrowRight />
              </button>
            </div>

            <div className="carousel-viewport">
              <div className="carousel-slider" ref={experienceSlider}>
                {jobsData.map((job, index) => (
                  <div className="experience-slide" key={index}>
                    <div className="job-card">
                      <div className="job-header">
                        <h3>{job.title}</h3>
                        <span className="job-role">{job.role}</span>
                        <span className="job-duration">{job.duration}</span>
                      </div>
                      <div className="job-body">
                        <p className="job-description">{job.description}</p>
                        <div className="tech-stack">
                          {job.skills.map((skill, i) => (
                            <span key={i}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="projects-gallery-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="project-image placeholder-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.githubLink}
                        className="project-icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.liveLink}
                        className="project-icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Projects;
