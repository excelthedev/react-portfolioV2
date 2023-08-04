import React from "react";
import styles from "./projects.module.css";
import SectionIntroduction from "./SectionIntroduction";
import ecomm from "../assests/ecomm.jpg";
import movie from "../assests/movie.jpg";
import music from "../assests/music.jpg";
import pay from "../assests/pay.jpg";

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <div className={styles.imgDisplay}>
            <img className={styles.img} src={ecomm} alt="Ecommerce Store" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>E-commerce Store</h2>
              <p className={styles.paragraph}>
                Online Clothing E-commerce store built with Stripe.js and
                commerce.js
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={styles.imgDisplay}>
            <img className={styles.img} src={movie} alt="movie website" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Movie Website</h2>
              <p className={styles.paragraph}>
                Movie website built using React.js and API
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={styles.imgDisplay}>
            <img className={styles.img} src={music} alt="music Store" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Music Website</h2>
              <p className={styles.paragraph}>
                Music website built using Next.js, Tailwind Css and API
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={styles.imgDisplay}>
            <img className={styles.img} src={pay} alt="Crypto Store" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Crypto Website</h2>
              <p className={styles.paragraph}>
                Crypto website built using Next.js, Tailwind Css and API
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://github.com/excelthedev?tab=repositories"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
