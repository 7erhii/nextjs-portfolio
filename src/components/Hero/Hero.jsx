import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import styles from "./Hero.module.css";

import HeroImage from "@/assets/images/Frame 19.png";

export default function Hero() {
  return (
    <section className={styles.HeroContainer}>
      <div className={styles.HeroContacts}>
        <div className={styles.HeroText}>
          <h1>
            Hello, I'm Serhiy
            <br />
            Full Stack Developer
          </h1>

          <span>He/Him</span>
          <h2>
            Turning business requirements <br /> into seamless user experiences
            through code.
          </h2>
        </div>
        <div className={styles.HeroButtons}>
          <a
            href="https://github.com/7erhii"
            target="_blank"
            className={styles.Links}
          >
            <FaGithub />
          </a>
          <a
            href="https://docs.google.com/document/d/1dlvVXklNILuDCVbgCL5lEjNTJ18kBFwc-cGOhSEIApU/"
            target="_blank"
            className={styles.HeroCV}
          >
            Download CV
            <FaCloudDownloadAlt />
          </a>
          <a
            href="https://x.com/7erhiy"
            target="_blank"
            className={styles.Links}
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:7erhiy@gmail.com"
            target="_blank"
            className={styles.Links}
          >
            <IoIosMail />
          </a>

          <a href="https://www.instagram.com/7erhi/" target="_blank" className={styles.Links}>
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.HeroImage}>
        <img
          src={HeroImage.src}
          alt="Portfolio"
          className={styles.ResponsiveImage}
        />
      </div>
    </section>
  );
}
