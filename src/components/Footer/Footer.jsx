'use client'
import Image from "next/image";
import styles from "./Footer.module.css";
import { IoMdArrowRoundUp } from "react-icons/io";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.FooterContainer} onClick={scrollToTop}>
      <IoMdArrowRoundUp/>
    </section>
  );
}
