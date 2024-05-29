"use client"
import Image from "next/image";
import { useState } from "react";
import styles from "./Target.module.css";
import Title from "@/components/Title/Title";

import NodeJs from "@/assets/images/icons8-nodejs.svg";
import NextJs from "@/assets/images/nextjs-icon-svgrepo-com.svg";
import Taiwind from "@/assets/images/tailwind.svg";
import Mongo from "@/assets/images/mongodb-svgrepo-com.svg";

export default function Target() {
  const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section className={styles.TargetContainer}>
      <Title title={"Current Focus"} />
      <div className={styles.TargetItems}>
        {[{img: NextJs, alt: "NextJs", text: "NextJs"},
          {img: NodeJs, alt: "NodeJs", text: "NodeJs"},
          {img: Taiwind, alt: "Taiwind", text: "Taiwind"},
          {img: Mongo, alt: "Mongo", text: "MongoDB"}].map((item, index) => (
          <div 
            key={index}
            className={`${styles.TargetItem} ${flipped === index ? styles.flipped : ""}`}
            onClick={() => handleFlip(index)}
            onMouseLeave={() => setFlipped(null)}
          >
            <div className={styles.TargetItemFront}>
              <Image src={item.img} alt={item.alt} />
              <p>{item.text}</p>
            </div>
            <div className={styles.TargetItemBack}>
              <p>
                {index === 0 && "High performance and SEO optimization due to server-side rendering. Incremental static generation allows for faster page loads."}
                {index === 1 && "Asynchronous processing makes it ideal for high-performance server applications. Using JavaScript on both the server and client simplifies development and code maintenance."}
                {index === 2 && "The utility-first approach allows for creating custom styles without writing additional CSS. Predefined classes speed up prototyping and design changes."}
                {index === 3 && "The flexibility of a document-oriented database makes it easy to manage data without a rigid schema. Support for horizontal scaling ensures high performance."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
