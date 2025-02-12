"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Target.module.css";
import Title from "@/components/Title/Title";

import NodeJs from "@/assets/images/icons8-nodejs.svg";
import NextJs from "@/assets/images/nextjs-icon-svgrepo-com.svg";
import Taiwind from "@/assets/images/tailwind.svg";
import Mongo from "@/assets/images/mongodb-svgrepo-com.svg";

export default function Target() {
  const [flipped, setFlipped] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const technologies = [
    {
      img: NextJs,
      alt: "Next.js",
      title: "Next.js",
      description: "High-performance React framework with server-side rendering and static site generation capabilities. Perfect for building SEO-friendly and blazing-fast web applications."
    },
    {
      img: NodeJs,
      alt: "Node.js",
      title: "Node.js",
      description: "Event-driven runtime for building scalable server-side applications. Enables using JavaScript across the entire stack, simplifying development and maintenance."
    },
    {
      img: Taiwind,
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
      description: "Utility-first CSS framework that streamlines development with pre-built classes. Enables rapid UI development without leaving your HTML."
    },
    {
      img: Mongo,
      alt: "MongoDB",
      title: "MongoDB",
      description: "Modern document database offering high scalability and flexibility. Perfect for applications requiring fast iterations and complex data structures."
    }
  ];

  return (
    <section className={styles.TargetContainer}>
      <div className={styles.TargetBackground} />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={fadeIn}>
          <Title title="Current Focus" />
        </motion.div>
        
        <motion.div className={styles.TargetItems} variants={container}>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={styles.TargetItem}
              variants={fadeIn}
              onMouseMove={handleMouseMove}
            >
              <div className={styles.TargetItemHeader}>
                <div className={styles.TargetItemIcon}>
                  <Image
                    src={tech.img}
                    alt={tech.alt}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className={styles.TargetItemTitle}>{tech.title}</h3>
              </div>
              <p className={styles.TargetItemDescription}>
                {tech.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
