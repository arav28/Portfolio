import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aravind!</h1>
        <p className={styles.description}>
          I design and code beautifully simple things, and I love what I do.
          I'm quietly confident, endlessly curious, and constantly refining
          my craft, I'm all about creating digital solutions that make a real
          impact.
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
