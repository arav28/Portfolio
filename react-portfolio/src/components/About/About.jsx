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
            <img 
              src={getImageUrl("about/publication.png")} 
              alt="Research Publications" 
            />
            <div className={styles.aboutItemText}>
              <h3>Research Publications</h3>
              <ul>
                <li>
                  S. Aravind, S. Harini, Varun Kumar K A,. 2021. “IoT Enabled
                  Efficient Detection and Classification Foliar Disease in Apple
                  Trees”. Design Engineering, September, 14011-24. 
                  <a href="http://thedesignengineering.com/index.php/DE/article/view/4669" target="_blank" rel="noopener noreferrer">Link to article</a>
                </li>
                <li>
                  Aravind, S., and S. Harini. "Cassava leaf disease
                  classification using Deep Learning." NVEO-NATURAL VOLATILES &
                  ESSENTIAL OILS Journal, 2021.
                  <a href="https://www.nveo.org/index.php/journal/article/view/2615" target="_blank" rel="noopener noreferrer">Link to article</a>
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/certifications.png")} 
              alt="Certifications" 
            />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <ul>
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>Build Reactive RESTFUL APIs using Spring Boot/WebFlux</li>
                <li>Big Data Integration and Processing</li>
                <li>Neural Networks and Deep Learning</li>
                <li>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, and Optimization</li>
                <li>Quantum Computing and Quantum Machine Learning</li>
              </ul>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/reward.png")} 
              alt="Volunteer Experience" 
            />
            <div className={styles.aboutItemText}>
              <h3>Volunteer Experience</h3>
              <ul>
                <li>For over six years, I volunteered at Fly Higher India (NGO), teaching life skills to underprivileged children through activity-based programs.</li>
                <li>I delivered lectures for Skilltechnika, in collaboration with the MSME, Government of India.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
