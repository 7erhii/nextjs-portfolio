import Image from "next/image";
import styles from "./Target.module.css";

import Title from "@/components/Title/Title";

import NodeJs from "@/assets/images/icons8-nodejs.svg";
import NextJs from "@/assets/images/nextjs-icon-svgrepo-com.svg";
import Taiwind from "@/assets/images/tailwind.svg";
import Mongo from "@/assets/images/mongodb-svgrepo-com.svg";

export default function Target() {
  return (
    <section className={styles.TargetContainer}>
      <Title title={"Current Focus"} />
      <div className={styles.TargetItems}>
        <div className={styles.TargetItem}>
          <Image src={NextJs} alt="NextJs" />
          <p>NextJs</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={NodeJs} alt="NodeJs" />
          <p>NodeJs</p>

        </div>

        <div className={styles.TargetItem}>
          <Image src={Taiwind} alt="Taiwind" />
          <p>Taiwind</p>

        </div>
        <div className={styles.TargetItem}>
          <Image src={Mongo} alt="Mongo" />
          <p>MongoDB</p>

        </div>

      </div>
      {/* <Title title={"Previous Experience"} /> */}
    </section>
  );
}