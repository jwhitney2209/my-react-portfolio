import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container has-text-centered">
        <div className="columns is-mobile is-marginless">
          <div className="column center buttons">
            <a
              href="https://github.com/jwhitney2209"
              target="_blank"
              rel="noreferrer"
              className="button is-dark is-outlined"
            >
            <span className='icon'><FaGithub /></span>
            <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jwhitney2209/"
              target="_blank"
              rel="noreferrer"
              className="button is-dark is-outlined"
            >
            <span className='icon'><FaLinkedin /></span>
            <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/teachergamergg"
              target="_blank"
              rel="noreferrer"
              className="button is-info is-outlined"
            >
            <span className='icon'><FaTwitter /></span>
            <span>Twitter</span>
            </a>
          </div>
        </div>
        <div>
          <p>Website by Jason Whitney 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
