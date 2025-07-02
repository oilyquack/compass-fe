import NextLink from "next/link";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles["NavBar-list"]}>
        <li>
          <NextLink href="/">Home</NextLink>
        </li>
        <li>
          <NextLink href="/line-up">Artists</NextLink>
        </li>
      </ul>
    </nav>
  );
}
