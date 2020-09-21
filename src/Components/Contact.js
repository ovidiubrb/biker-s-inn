import React from "react";
import "./Contact.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <h1>Ovidiu Horea Barbu</h1>
      <div className="contact__info">
        <h3>
          <HiOutlineMail size={40} /> ohbarbu@gmail.com
        </h3>
        <h3>
          <FaPhoneSquareAlt size={40} /> 0753429709
        </h3>
        <h3>
          <AiFillLinkedin size={40} />
          <a
            href="https://www.linkedin.com/in/ovidiu-barbu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ovidiu-barbu
          </a>
          <h3>
            <AiFillGithub size={40} />{" "}
          </h3>
        </h3>
      </div>
    </div>
  );
}

export default Contact;
