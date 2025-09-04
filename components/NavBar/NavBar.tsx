"use client";
import { FocusTrap } from "focus-trap-react";
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
    <FocusTrap active={isOpen}>
      <nav className={styles.NavBar}>
        {pathname !== "/" ? (
          <NextLink aria-label="Home" href="/" style={{ gridArea: "home" }}>
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
          <li>
            <NextLink className={styles["NavBar-link"]} href="/apply">
              Apply
            </NextLink>
          </li>
          <li>
            <NextLink className={styles["NavBar-link"]} href="/tickets">
              Tickets
            </NextLink>
          </li>
          <li>
            <NextLink className={styles["NavBar-link"]} href="/faqs">
              FAQs
            </NextLink>
          </li>
          <li>
            <NextLink className={styles["NavBar-link"]} href="/about">
              About
            </NextLink>
          </li>
        </ul>
        <ul className={styles["NavBar-cta"]}>
          <li></li>
        </ul>
        <button
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Toggle navigation"
          className={styles["NavBar-button"]}
          onClick={() => setIsOpen((b) => !b)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </FocusTrap>
  );
}
