import React from "react";
import resume from "../resume/LancePu_Technical_Resume.pdf";

const Footer = () => (
  <footer>
    <a
      href="https://www.linkedin.com/in/lancepu/"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin
    </a>{" "}
    &ndash;{" "}
    <a
      href="https://github.com/lancepu"
      target="_blank"
      rel="noopener noreferrer"
    >
      github
    </a>{" "}
    &ndash;{" "}
    <a
      href="mailto:contact@lancepu.dev"
      target="_top"
      rel="noopener noreferrer"
    >
      email
    </a>
    &ndash;{" "}
    <a href={resume} target="_blank" rel="noopener noreferrer">
      résumé
    </a>
  </footer>
);

export default Footer;
