import React from 'react';
import styles from '../styles/footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <a href="/contact" rel="noopener noreferrer" className={styles.a}>
          <FontAwesomeIcon icon="envelope" className={styles.fontAwesomeIcon} size="lg" />
        </a>
        <a href="https://twitter.com/petertardif" rel="noopener noreferrer" target="_blank" className={styles.a}>
          <FontAwesomeIcon icon={["fab", "twitter"]} className={styles.fontAwesomeIcon} size="lg" />
        </a>
        <a href="https://github.com/petertardif" rel="noopener noreferrer" target="_blank" className={styles.a}>
          <FontAwesomeIcon icon={["fab", "github"]} className={styles.fontAwesomeIcon} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/petertardif/" rel="noopener noreferrer" target="_blank" className={styles.a}>
          <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.fontAwesomeIcon} size="lg" />
        </a>
      </ul>
    </footer>
  )
}