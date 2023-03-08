import React from "react";
import styles from "./experience.module.css";
import ListEntry from "./ListEntry";
import SectionIntroduction from "./SectionIntroduction";

export default function Experience() {
  return (
    <section id="experience">
      <div className={styles.wrapper}>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ListEntry
            title={"Jarritsoft Solution Ventures "}
            date={"Nov 2022 - Present"}
          >
            <li>Designing and Developing API's</li>
            <li>Developing Front end website architecture</li>
            <li>Proposed technology solutions to improve process efficiency</li>
            <li>
              Ensuring cross-platform optimization for mobile phones and all
              devices
            </li>
          </ListEntry>

          <ListEntry title={"Hyperia Network "} date={"Sep 2020 -July 2021"}>
            <li>Monitored Network interference and Downtime</li>
            <li>
              Communicated with sales staff and marketing staff to determine
              customers need
            </li>
            <li>
              Performed Network Technology Upgrade, expansion project and
              integration testing
            </li>
          </ListEntry>
        </div>
      </div>
    </section>
  );
}
