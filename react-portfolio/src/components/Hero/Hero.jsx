import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi!, I'm Aravind</h1>
        <p className={styles.description}>
        I'm a Master's student in Computer Science at Indiana University. With a focus on full-stack development, I have practical experience in Java, .NET, 
        and cloud technologies. My background includes developing scalable microservices, optimizing performance, and managing complex projects.
        </p>
        <a className={styles.contactBtn} href="mailto:aruve28@gmail.com">
          Get in touch
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/me3.jpg")}
        alt="my DP"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
