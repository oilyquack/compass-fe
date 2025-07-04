"use client";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import CompassLogo from "@/assets/CompassLogo";

import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={styles.NavBar}>
      {pathname !== "/" ? (
        <NextLink href="/" style={{ gridArea: "home" }}>
          <CompassLogo
            className={`${styles["NavBar-link"]} ${styles["NavBar-logo"]}`}
          />
        </NextLink>
      ) : null}
      <ul aria-hidden={!isOpen} className={styles["NavBar-list"]}>
        <li>
          <NextLink className={styles["NavBar-link"]} href="/line-up">
            Lineup
          </NextLink>
        </li>
      </ul>
      <ul className={styles["NavBar-cta"]}>
        <li></li>
      </ul>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={styles["NavBar-button"]}
        onClick={() => setIsOpen((b) => !b)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
