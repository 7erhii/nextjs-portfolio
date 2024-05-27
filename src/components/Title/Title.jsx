import styles from "./Title.module.css";

export default function Title({ title }) {
  return (
    <section className={styles.HeroContainer}>
      <h2>{title}</h2>
    </section>
  );
}
