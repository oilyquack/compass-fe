"use client";
import { usePathname } from "next/navigation";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";

import styles from "./PageLayout.module.css";

export default function PageLayout({
  children,
}: {
  background?: "default" | "solid";
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isNavbarHidden = pathname === "/mailing-list";
  const isFooterHidden = pathname === "/mailing-list";

  const isSolidBackground =
    pathname === "/mailing-list" || pathname?.startsWith("/artist");

  console.log({ isSolidBackground });
  return (
    <main
      className={`${styles.PageLayout} ${
        isSolidBackground
          ? styles["PageLayout--solidBackground"]
          : styles["PageLayout--defaultBackground"]
      }`}
    >
      {!isNavbarHidden && (
        <header
          className={
            isSolidBackground ? styles["PageLayout--solidBackground"] : ""
          }
          style={{ position: "relative" }}
        >
          <Section>
            <NavBar />
          </Section>
        </header>
      )}
      <div className={styles["PageLayout-mainWrapper"]}>{children}</div>
      {!isFooterHidden && <Footer />}
    </main>
  );
}
