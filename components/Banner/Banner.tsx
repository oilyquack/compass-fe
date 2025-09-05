import React from "react";

import styles from "./Banner.module.css";

type BannerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Banner({ children, className }: BannerProps) {
  return (
    <div className={`${styles.Banner} ${className}`}>
      <div className={styles["Banner-content"]}>{children}</div>
    </div>
  );
}
