import React from "react";
import { Icon } from "@iconify/react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Credentials & Contributions</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/publication.png")} />
            <div className={styles.aboutItemText}>
              <h3>Research Publications</h3>
              <ul>
                <li>
                  S. Aravind, S. Harini, Varun Kumar K A,. 2021. “IoT Enabled
                  Efficient Detection and Classification Foliar Disease in Apple
                  Trees”. Design Engineering, September, 14011-24.
                  http://thedesignengineering.com/index.php/DE/article/view/4669
                </li>
                <li>
                  Aravind, S., and S. Harini. "Cassava leaf disease
                  classification using Deep Learning." NVEO-NATURAL VOLATILES &
                  ESSENTIAL OILS Journal| NVEO (2021): 9375-9389.
                  https://www.nveo.org/index.php/journal/article/view/2615
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certifications.png")} />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <ul>
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>Build Reactive RESTFUL APIs using Spring Boot/WebFlux </li>
                <li>Big Data Integration and Processing</li>
                <li>Neural Networks and Deep Learning</li>
                <li>
                  Improving Deep Neural Networks: Hyperparameter tuning,
                  Regularization and Optimization
                </li>
                <li> Quantum Computing and Quantum Machine Learning</li>
              </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/reward.png")} />
            <div className={styles.aboutItemText}>
              <h3>Volunteer Experience</h3>
              <ul>
                <li>For over six years, I had the privilege to volunteer at Fly Higher India (NGO), where I dedicated my time to instilling essential life skills in underprivileged children through activity-based learning programs. </li>
                <li> I delivered resourceful lectures organized by Skilltechnika, in collaboration with the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India ( contact reference: Dr. Varun Kumar- varun.kumar300@gmail.com).</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
