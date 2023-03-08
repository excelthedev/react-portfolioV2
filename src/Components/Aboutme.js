import React from "react";
import styles from "./aboutme.module.css";
import SectionIntroduction from "./SectionIntroduction";

export default function Aboutme() {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <div className={styles.wrapper}>
        <SectionIntroduction>ABOUT ME</SectionIntroduction>
        <div className={styles.sectionContent}>
          <p className={styles.paragraph}>
            With a degree in Computer Science, i work as a{" "}
            <strong>Software Developer</strong>. Got into building web apps by
            chance, ever since then i've refused to leave, lol. I build things i
            want cause why not? but when i'm working with teams or being paid, i
            build things a Client or the Company wants, inorder to achieve set
            goals to aid the Client-User (unless i'm contributing to open source
            of course, then i'm simply doing it for humanity).
          </p>
          <p className={styles.paragraph}>
            Stacks i use include (but are not limited to){" "}
            <strong>
              {" "}
              HTML,CSS & JavaScript(the almighty web foundations), ReactJs,
              NextJs, SCSS, TailwindCss, ES6, Typecript,Node, MySQL, Postgre,
              MonogoDB, Git & Github, PHP
            </strong>
            .
          </p>
        </div>
        <div className={styles.icons}>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-node"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </section>
  );
}
