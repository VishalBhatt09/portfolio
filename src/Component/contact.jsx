import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "sending", message: "Sending message..." });

    // Log the form data to check if it's being captured correctly
    const formData = new FormData(form.current);
    console.log("Form data:", {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      from_subject: formData.get("from_subject"),
      message: formData.get("message"),
    });

    emailjs
      .sendForm(
        "service_8562hul", // Replace with your actual service ID
        "template_4ibre56", // Replace with your actual template ID
        form.current,
        "Rd5DQbbiq-TC7aZJ-" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setStatus({ type: "success", message: "Message sent successfully!" });
          e.target.reset();
        },
        (error) => {
          console.log("ERROR:", error.text);
          console.log("Error details:", error);
          setStatus({
            type: "error",
            message: `Failed to send message: ${error.text}`,
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-5"
        >
          <h2>
            Get In <span className="purpal">Touch</span>
          </h2>
          <div className="contact-subtitle">
            <p className="text-gray">
              Let's discuss your project or just say hello
            </p>
          </div>
        </motion.div>

        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-info-container"
          >
            <div className="contact-info-header">
              <h3>
                Contact <span className="purpal">Information</span>
              </h3>
              <p className="text-gray">
                Fill out the form or contact me directly
              </p>
            </div>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <FaEnvelope className="icon purpal" />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p className="text-gray">vishalbhatt829@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <FaPhone className="icon purpal" />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p className="text-gray">+91 9978576070</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <FaMapMarkerAlt className="icon purpal" />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p className="text-gray">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Find me on</h4>
              <div className="contact-social-icons">
                <a
                  href="https://github.com/VishalBhatt09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-bhatt09/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/vishaall_bhatt_9?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-form-container"
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-header">
                <h3>
                  Send me a <span className="purpal">Message</span>
                </h3>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <input
                    type="text"
                    name="from_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    name="from_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <input
                  type="text"
                  name="from_subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  className="btn"
                  disabled={status.type === "sending"}
                >
                  {status.type === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
