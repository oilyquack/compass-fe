import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import styles from "./layout.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Compass Music",
  description:
    "A celebration of grassroots music, independent artists & community by the sea in Folkestone, Kent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={`${montserrat.variable} ${styles.Layout}`}>
        <main className={styles["Layout-main"]}>{children}</main>
      </body>
    </html>
  );
}
