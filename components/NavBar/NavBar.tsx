"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

import CompassLogo from "@/assets/CompassLogo";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.NavBar}>
      <ul className={styles["NavBar-list"]}>
        <li>
          <ul className={styles["NavBar-list"]}>
            <li>
              <NextLink className={styles["NavBar-link"]} href="/line-up">
                Lineup
              </NextLink>
            </li>
          </ul>
        </li>
        {pathname !== "/" ? (
          <li>
            <NextLink href="/">
              <CompassLogo
                className={styles["NavBar-link"]}
                width={242}
                height={113}
              />
            </NextLink>
          </li>
        ) : null}
        <li>
          <ul className={styles["NavBar-list"]}>
            <li></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
