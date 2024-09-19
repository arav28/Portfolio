import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Card.module.css";

export const Card = ({ item: { title, imageSrc, description, skills, source } }) => {
  // Split the description into bullet points
  const bulletPoints = description.split('.').filter(point => point.trim() !== '');

  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} className={styles.image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.description}>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li className={styles.skill} key={id}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={source} target="_blank" rel="noopener noreferrer">Source code</a>
      </div>
    </div>
  );
};
