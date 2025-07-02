import styles from "./Section.module.css";

export default function Section({ children }: { children: React.ReactNode }) {
  return <div className={styles.Section}>{children}</div>;
}
