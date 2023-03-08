import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <a
        href={"https://github.com/theseventhgod?tab=repositories"}
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
      >
        <i className={`fa-brands fa-github ${styles.icon}`}></i>
      </a>

      <a
        href={"https://www.linkedin.com/in/oluwatobiloba-excel-5b50a0202/"}
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
      >
        <i className={`fa-brands fa-linkedin ${styles.icon}`}></i>
      </a>

      <a
        href={"Mailto:tobyadeyy@gmail.com"}
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
      >
        <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
      </a>
    </div>
  );
}
