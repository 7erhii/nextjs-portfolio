import Image from "next/image";
import styles from "./Previous.module.css";

import Title from "@/components/Title/Title";

import Angular from "@/assets/images/angular-svgrepo-com.svg";
import NextJs from "@/assets/images/nextjs-icon-svgrepo-com.svg";
import Taiwind from "@/assets/images/tailwind.svg";
import Mongo from "@/assets/images/mongodb-svgrepo-com.svg";

import JS from "@/assets/images/js-svgrepo-com.svg";
import vuejs from "@/assets/images/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import php from "@/assets/images/php-svgrepo-com.svg";
import pug from "@/assets/images/pug-svgrepo-com.svg";
import scss2 from "@/assets/images/scss2-svgrepo-com.svg";
import jira from "@/assets/images/jira-svgrepo-com.svg";
import slack from "@/assets/images/slack-svgrepo-com.svg";
import postman from "@/assets/images/postman-icon-svgrepo-com.svg";
import docker from "@/assets/images/docker-svgrepo-com.svg";
// import php from "@/assets/images/php-svgrepo-com.svg";


export default function Previous() {
  return (
    <section className={styles.TargetContainer}>
      <Title title={"Previous Experience"} />
      <div className={styles.TargetItems}>
        <div className={styles.TargetItem}>
          <Image src={Angular} alt="Angular" />
          <p>Angular</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={JS} alt="JS" />
          <p>JS</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={vuejs} alt="vuejs" />
          <p>vuejs</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={php} alt="php" />
          <p>php</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={pug} alt="pug" />
          <p>pug</p>
        </div>

        <div className={styles.TargetItem}>
          <Image src={scss2} alt="scss2" />
          <p>scss</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={jira} alt="jira" />
          <p>jira</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={slack} alt="slack" />
          <p>slack</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={postman} alt="postman" />
          <p>postman</p>
        </div>
        <div className={styles.TargetItem}>
          <Image src={docker} alt="docker" />
          <p>docker</p>
        </div>

      </div>
    </section>
  );
}