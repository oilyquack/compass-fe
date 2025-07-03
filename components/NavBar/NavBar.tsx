import NextLink from "next/link";

import CompassLogo from "@/assets/CompassLogo";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles["NavBar-list"]}>
        <li>
          <ul className={styles["NavBar-list"]}>
            <li>
              <NextLink href="/line-up">Lineup</NextLink>
            </li>
          </ul>
        </li>
        <li>
          <NextLink href="/">
            <CompassLogo
              className={styles["NavBar-logo"]}
              width={242}
              height={113}
            />
          </NextLink>
        </li>
        <li>
          <ul className={styles["NavBar-list"]}>
            <li></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
