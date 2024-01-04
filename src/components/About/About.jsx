import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/heroImage.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div style={{display:"flex",flexDirection:'column'}}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
      </ul>
      <h1 >🔧 Proficient in React.js and its ecosystem, I specialize in:</h1>
      <ul className={styles.aboutPoints}>
        <li>Building responsive and pixel-perfect user interfaces.</li>
        <li>State management with ReduxToolkit and context API.</li>
        <li>Consuming RESTful and GraphQL APIs.</li>
        <li>Integrating third-party libraries and APIs seamlessly.</li>
        <li>Optimizing performance for a lightning-fast user experience.</li>
      </ul>
      </div>
      </div>
    </section>
  );
};
