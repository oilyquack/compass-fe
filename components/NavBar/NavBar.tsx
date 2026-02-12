"use client";
import { FocusTrap } from "focus-trap-react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import CompassLogo from "@/assets/CompassLogo";
import styles from "./NavBar.module.css";

const leftLinks = [
  { href: "/archive/2025", label: "2025" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

const rightLinks = [
  { href: "/cookies", label: "Cookies" },
  { href: "/privacy", label: "Privacy" },
];

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
        <ul className={`${styles.NavBarList} ${styles.NavBarListLeft}`}>
          {leftLinks.map((link) => (
            <li key={link.href}>
              <NextLink className={styles.NavBarLink} href={link.href}>
                {link.label}
              </NextLink>
            </li>
          ))}
        </ul>

        {pathname !== "/" && (
          <NextLink
            aria-label="Home"
            href="/"
            className={styles.NavBarLogoLink}
          >
            <CompassLogo
              className={`${styles.NavBarLink} ${styles.NavBarLogo}`}
            />
          </NextLink>
        )}

        {/* Desktop links right */}
        <ul className={`${styles.NavBarList} ${styles.NavBarListRight}`}>
          {rightLinks.map((link) => (
            <li key={link.href}>
              <NextLink className={styles.NavBarLink} href={link.href}>
                {link.label}
              </NextLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Toggle navigation"
          className={styles.NavBarButton}
          onClick={() => setIsOpen((b) => !b)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile pop-out menu */}
        <div
          className={styles.MobileMenu}
          aria-hidden={!isOpen}
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <ul className={styles.MobileMenuList}>
            {[...leftLinks, ...rightLinks].map((link) => (
              <li key={link.href}>
                <NextLink
                  className={styles.NavBarLink}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </FocusTrap>
  );
}
