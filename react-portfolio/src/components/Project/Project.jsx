import React from 'react'
import projects from "../../data/projects.json"
import { Card } from './Card';
import styles from "./Project.module.css";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {projects.map((item,id) => {
                return (
                    <Card key={id} item={item}/>
                );
            })}
        </div>
    </section>
  )
}
