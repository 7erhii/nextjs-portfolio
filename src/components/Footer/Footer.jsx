'use client'

import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function Footer() {
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--mouse-x', `${x}%`);
    button.style.setProperty('--mouse-y', `${y}%`);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={styles.FooterContainer}
      onClick={scrollToTop}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <IoMdArrowRoundUp />
    </motion.div>
  );
}
