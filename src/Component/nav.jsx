import React, { useState, useEffect } from "react";

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavClick = (e) => {
    e.stopPropagation();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeSidebar();
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const isActive = (section) => {
    return activeSection === section ? "active-link" : "";
  };

  return (
    <div className="class-nav">
      <header>
        <nav>
          <div className="left">vishal's portfolio</div>
          <ul>
            <li>
              <a
                href="#home"
                className={isActive("home")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={isActive("about")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={isActive("projects")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={isActive("contact")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div
            className={`hamburger ${sidebarOpen ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div
          className={`sidebar ${sidebarOpen ? "active" : ""}`}
          onClick={handleNavClick}
        >
          <ul>
            <li>
              <a
                href="#home"
                className={isActive("home")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={isActive("about")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={isActive("projects")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={isActive("contact")}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={`overlay ${sidebarOpen ? "active" : ""}`}></div>
      </header>
    </div>
  );
}

export default Nav;
