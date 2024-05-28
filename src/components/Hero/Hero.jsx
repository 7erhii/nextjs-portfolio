import { FaGithub } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
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
          <a href="" target="_blank" className={styles.Links}>
            <FaGithub />
          </a>
          <a
            href="https://drive.google.com/file/d/16lHEsVQbXCIpJI1W-G2qM_sj8eFJf3Rd/view"
            target="_blank"
            className={styles.HeroCV}
          >
            Download CV
            <FaCloudDownloadAlt />
          </a>
          <a href="" target="_blank" className={styles.Links}>
            <FaTwitter />
          </a>
          <a href="" target="_blank" className={styles.Links}>
            <IoIosMail />
          </a>
          <a href="" target="_blank" className={styles.Links}>
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
