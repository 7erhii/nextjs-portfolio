"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Previous.module.css";
import Title from "@/components/Title/Title";

import Angular from "@/assets/images/angular-svgrepo-com.svg";
import JS from "@/assets/images/js-svgrepo-com.svg";
import vuejs from "@/assets/images/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import php from "@/assets/images/php-svgrepo-com.svg";
import pug from "@/assets/images/pug-svgrepo-com.svg";
import scss2 from "@/assets/images/scss2-svgrepo-com.svg";
import jira from "@/assets/images/jira-svgrepo-com.svg";
import slack from "@/assets/images/slack-svgrepo-com.svg";
import postman from "@/assets/images/postman-icon-svgrepo-com.svg";
import docker from "@/assets/images/docker-svgrepo-com.svg";

const technologies = [
  { img: Angular, name: "Angular" },
  { img: JS, name: "JavaScript" },
  { img: vuejs, name: "Vue.js" },
  { img: php, name: "PHP" },
  { img: pug, name: "Pug" },
  { img: scss2, name: "SCSS" },
  { img: jira, name: "Jira" },
  { img: slack, name: "Slack" },
  { img: postman, name: "Postman" },
  { img: docker, name: "Docker" }
];

export default function Previous() {
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
          <Title title="Previous Experience" />
        </motion.div>
        
        <motion.div className={styles.TargetItems} variants={container}>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={styles.TargetItem}
              variants={fadeIn}
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={40}
                height={40}
                priority={index < 4}
              />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}