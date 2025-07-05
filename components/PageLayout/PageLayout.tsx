import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";

import styles from "./PageLayout.module.css";

export default function PageLayout({
  background = "default",
  children,
}: {
  background?: "default" | "solid";
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${styles.PageLayout} ${
        styles[`PageLayout-${background}Background`]
      }`}
    >
      <header style={{ position: "relative" }}>
        <Section className={styles["PageLayout-navbar"]}>
          <NavBar />
        </Section>
      </header>
      {children}
      <Footer />
    </main>
  );
}
