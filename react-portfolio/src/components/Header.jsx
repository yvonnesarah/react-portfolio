import styles from "../styles/Header.module.css"
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Header() {
  const [click] = useState(true);
 

  return (
    <div className={styles.navContainer}>
      <ul
        className={
          click ? styles.navMenu : `${styles.navMenu} ${styles.active}`
        }
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      </div>
  
  );
}

