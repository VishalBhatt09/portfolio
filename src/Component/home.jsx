import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

function Home() {
  // Create reference for the element that will contain the typing animation
  const el = useRef(null);

  useEffect(() => {
    // Create a new Typed instance
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Frontend Developer",
        "React.js Developer",
        "UI/UX Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    // Destroying on unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: "100vh", // Start from bottom
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
      y: "-100vh", // Exit to top
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="home-section"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <section className="firstsection">
        <div className="leftsecction">
          Hi, my name is <span className="purpal"> vishal </span>
          <div>and I am a passionate</div>
          <span id="element" ref={el}></span>
          <div className="button">
            <button className="btn">Download resume</button>
            <button className="btn">Visit github </button>
          </div>
        </div>
        <div className="rightsection">
          <img src="./medie/bg.png" alt="" />
        </div>
      </section>
      <hr />
    </motion.div>
  );
}

export default Home;
