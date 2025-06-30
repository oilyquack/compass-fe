import NextLink from "next/link";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles["NavBar-list"]}>
        <li>
          <NextLink href="/">HOME</NextLink>
        </li>
        <li>
          <NextLink href="/artists">ARTISTS</NextLink>
        </li>
      </ul>
    </nav>
  );
}
