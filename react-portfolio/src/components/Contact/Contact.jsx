import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  

  const handleEmailClick = () => {
    window.location.href = 'mailto:aruve28@gmail.com';
  };
  const handleLinkedinClick = () => {
    window.location.href = 'https://www.linkedin.com/in/aravind-sivakumar-a02144161/';
  };
  const handleGithubIcon = () => {
    window.location.href = 'https://github.com/arav28';
  };

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Living, learning, & leveling up one day at a time.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} onClick={handleEmailClick} />
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} onClick={handleLinkedinClick} />
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} onClick={handleGithubIcon} />
        </li>
      </ul>
    </footer>
  );
};