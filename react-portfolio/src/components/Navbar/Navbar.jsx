import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuDraw, setMenuDraw] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        My Profile
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuDraw
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="Menu Icon"
          onClick={() => setMenuDraw(!menuDraw)}
        />
        <ul className={`${styles.menuItems} ${menuDraw && styles.menuOpen}`}
        onClick={()=> setMenuDraw(false)}>
          
          <li>
            <a href="#experience"> Experience </a>
          </li>
          <li>
            <a href="#projects"> Projects </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
