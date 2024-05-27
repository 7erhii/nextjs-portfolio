import Image from "next/image";

import styles from "./Page.module.css";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Target from "@/components/Target/Target";
import Previous from "@/components/Previous/Previous";
import FontResizer from "@/components/FontResizer.js";
import Sertificate from "@/components/Sertificate/Sertificate";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* <Header /> */}
      <FontResizer />
      {/* <Hero /> */}
      {/* <Target /> */}
      {/* <Previous /> */}
      <Sertificate />
      

    </div>
  );
}
