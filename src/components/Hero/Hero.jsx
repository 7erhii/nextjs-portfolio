"use client";

import { FaGithub, FaCloudDownloadAlt, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from "./Hero.module.css";
import HeroImage from "@/assets/images/Frame 19.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.HeroContainer}>
      <div className={styles.HeroBackground} />
      <motion.div
        className={styles.HeroContent}
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div className={styles.HeroInfo} variants={fadeIn}>
          <motion.span className={styles.HeroRole} variants={fadeIn}>
            Full Stack Developer
          </motion.span>
          <motion.h1 className={styles.HeroHeading} variants={fadeIn}>
            Hello, I'm Serhiy
          </motion.h1>
          <motion.p className={styles.HeroDescription} variants={fadeIn}>
            Turning business requirements into seamless user experiences through code.
            Specializing in creating modern and efficient web solutions.
          </motion.p>
          
          <motion.div className={styles.SocialLinks} variants={fadeIn}>
            <motion.a
              href="https://docs.google.com/document/d/1Wh1KppRxdiHd69FvFLjJoLsvRjkNTxmYh9uBelsqe64/edit?usp=sharing"
              target="_blank"
              className={styles.CVButton}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                Download CV
                <FaCloudDownloadAlt />
              </span>
            </motion.a>
            <motion.a
              href="https://github.com/7erhii"
              target="_blank"
              className={styles.SocialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://x.com/7erhiy"
              target="_blank"
              className={styles.SocialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter />
            </motion.a>
            <motion.a
              href="mailto:7erhiy@gmail.com"
              target="_blank"
              className={styles.SocialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoIosMail />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/7erhi/"
              target="_blank"
              className={styles.SocialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.HeroImageContainer}
          variants={fadeIn}
        >
          <div className={styles.HeroImageWrapper}>
            <Image
              src={HeroImage}
              alt="Portfolio"
              className={styles.HeroImage}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 600px"
            />
            <div className={styles.ImageDecoration} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
