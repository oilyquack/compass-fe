import NextImage from "next/image";

import Section from "@/components/Section";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles["Footer-wave"]}>
        <svg
          viewBox="0 0 1440 120"
          width="100%"
          height="120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footer-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff97d6" />
              <stop offset="100%" stopColor="#f4e816" />
            </linearGradient>
          </defs>
          <path
            d="M0,40
              Q60,60 120,40
              Q180,20 240,40
              Q300,60 360,40
              Q420,20 480,40
              Q540,60 600,40
              Q660,20 720,40
              Q780,60 840,40
              Q900,20 960,40
              Q1020,60 1080,40
              Q1140,20 1200,40
              Q1260,60 1320,40
              Q1380,20 1440,40
              L1440,120 L0,120 Z"
            fill="url(#footer-gradient)"
          />
        </svg>
      </div>
      <footer className={styles.Footer}>
        <Section>
          <div className={`${styles["Footer-logos"]} mg-btm-lg`}>
            <NextImage
              alt="Creative Folkestone"
              src="/assets/creative-folkestone.png"
              width={191}
              height={55}
            />

            <NextImage
              width={88}
              height={88}
              alt="Compass Music"
              src="/assets/compass-music.png"
            />
          </div>
        </Section>
      </footer>
    </>
  );
}
