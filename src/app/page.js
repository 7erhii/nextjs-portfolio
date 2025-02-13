import Image from "next/image";
import Head from 'next/head';

import styles from "./Page.module.css";

// import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Target from "@/components/Target/Target";
import Previous from "@/components/Previous/Previous";
import FontResizer from "@/components/FontResizer.js";
import Sertificate from "@/components/Sertificate/Sertificate";
import Examples from "@/components/Examples/Examples";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  alternates: {
    canonical: 'https://krepets.com',
  },
  openGraph: {
    title: 'Hire Serhii Krepets - Expert Web Developer',
    description: 'Professional web developer specializing in React, Node.js & PHP. View portfolio and hire for your next project.',
    type: 'website',
  }
};

export default function Home() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <FontResizer />
        <Hero />
        <Target />
        <Previous />
        <Sertificate />
        <Examples />
        <Footer />
      </div>
    </>
  );
}
