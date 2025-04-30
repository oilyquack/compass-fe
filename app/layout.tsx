import type { Metadata } from "next";
// import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.Layout}`}
      >
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
