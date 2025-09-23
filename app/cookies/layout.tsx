import styles from "./cookies.module.css";

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.Cookies}>{children}</div>;
}
