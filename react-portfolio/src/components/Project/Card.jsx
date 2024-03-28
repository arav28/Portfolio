import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Card.module.css";

export const Card = ({item: { title, imageSrc, description, skills, source },}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return <li className={styles.skill} key={id}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={source}>Source code</a>
      </div>
    </div>
  );
};
