import styles from "./Section.module.css";

export default function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`${styles.Section} ${className}`}>{children}</div>;
}
