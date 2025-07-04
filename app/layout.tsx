import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";

import "@/styles/globals.css";
import styles from "./layout.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a) {
                var b = document.getElementsByTagName("head")[0],
                  c = document.createElement("script");
                c.type = "text/javascript";
                c.src = "https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange = a;
                c.onload = a;
                b.appendChild(c);
              }
              loadScript(function() {
                beTracker.t({ hash: "98917cdab84d97b3b27f6d0529f828e2" });
              });
            `,
          }}
        />
      </head>

      <body className={`${montserrat.variable} ${lato.variable}`}>
        <main className={styles.Layout}>
          <header style={{ position: "relative" }}>
            <Section>
              <NavBar />
            </Section>
          </header>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
