import styles from "./privacy.module.css";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.Privacy}>{children}</div>;
}
