import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

// import Link from "next/link";

import "./globals.css";
import styles from "./layout.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Compass Festival",
  description: "Compass Festival",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${styles.Layout}`}>
        {/* <nav className={styles["Layout-nav"]}>
          <ul className={styles["Layout-navItems"]}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="https://example.com">Apply to play</a>
            </li>
            <li>
              <Link href="/mailing-list">Join the mailing list</Link>
            </li>
            <li>
              <a href="/archive">2024</a>
            </li>
          </ul>
        </nav> */}

        <main className={styles["Layout-main"]}>{children}</main>

        {/* <footer className={styles["Layout-footer"]}>
          <p>Copyright &copy; Compass {new Date().getFullYear()}</p>
        </footer> */}
      </body>
    </html>
  );
}
