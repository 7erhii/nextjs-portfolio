import Image from "next/image";
import styles from "./Sertificate.module.css";

import Title from "@/components/Title/Title";

import udemy from "@/assets/images/udemy.jpeg";
import meta from "@/assets/images/meta.png";

export default function Sertificate() {
  return (
    <section className={styles.TargetContainer}>
      <Title title={"Certifications"} />
      <div className={styles.TargetItems}>
        <div className={styles.Card}>
          <a
            href="https://coursera.org/share/0129d16a6f2d3244492441df69a01d9e"
            className={styles.ImageWrapper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={meta} alt="meta" className={styles.Image} />
          </a>
          <p className={styles.Caption}>Meta Front-End Developer</p>
          <span>Coursera</span>
        </div>
        <div className={styles.Card}>
          <a
            href="https://www.udemy.com/certificate/UC-1c6188e2-b387-4264-941b-e092fcd57b61/"
            className={styles.ImageWrapper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={udemy} alt="udemy" className={styles.Image} />
          </a>
          <p className={styles.Caption}>Web Developer 2022</p>
          <span>Udemy</span>

        </div>
      </div>
    </section>
  );
}
