"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Sertificate.module.css";
import Title from "@/components/Title/Title";

import udemy from "@/assets/images/udemy.jpeg";
import meta from "@/assets/images/meta.png";

export default function Sertificate() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.TargetContainer}>
      <div className={styles.TargetBackground} />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={fadeIn}>
          <Title title="Certifications" />
        </motion.div>
        
        <motion.div className={styles.TargetItems} variants={container}>
          <motion.div
            className={styles.Card}
            variants={fadeIn}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="https://coursera.org/share/0129d16a6f2d3244492441df69a01d9e"
              className={styles.ImageWrapper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={meta} alt="Meta Front-End Developer Certificate" className={styles.Image} priority />
            </a>
            <p className={styles.Caption}>Meta Front-End Developer</p>
            <span>Coursera</span>
          </motion.div>

          <motion.div
            className={styles.Card}
            variants={fadeIn}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="https://www.udemy.com/certificate/UC-1c6188e2-b387-4264-941b-e092fcd57b61/"
              className={styles.ImageWrapper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={udemy} alt="Web Developer 2022 Certificate" className={styles.Image} priority />
            </a>
            <p className={styles.Caption}>Web Developer 2022</p>
            <span>Udemy</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
