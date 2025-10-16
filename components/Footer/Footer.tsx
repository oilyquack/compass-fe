import NextImage from "next/image";
import NextLink from "next/link";

import Facebook from "@/assets/Facebook";
import Instagram from "@/assets/Instagram";
import LinkedIn from "@/assets/LinkedIn";
import Threads from "@/assets/Threads";
import TikTok from "@/assets/TikTok";
import Button from "@/components/Button";
import Section from "@/components/Section";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
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
      <Section className={styles["Footer-content"]}>
        <div className="mg-btm-md">
          <Button href="/mailing-list" target="_blank">
            Join the mailing list
          </Button>
        </div>
        <div className={styles["Footer-bottom"]}>
          <ul className={styles["Footer-socials"]}>
            <li>
              <a
                href="https://www.facebook.com/compassmusiccic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className={styles["Footer-socialIcon"]}
                  width={44}
                  height={44}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/compass_music_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className={styles["Footer-socialIcon"]}
                  width={44}
                  height={44}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.threads.com/@compass_music_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Threads
                  className={styles["Footer-socialIcon"]}
                  width={44}
                  height={44}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@compass_music_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTok
                  className={styles["Footer-socialIcon"]}
                  width={44}
                  height={44}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/compass-music"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn
                  className={styles["Footer-socialIcon"]}
                  width={44}
                  height={44}
                />
              </a>
            </li>
          </ul>
          <div className={styles["Footer-logos"]}>
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
        </div>
        <div className={styles["Footer-links"]}>
          <a
            href="#"
            className={`${styles["Footer-consentPreferences"]} termly-display-preferences`}
          >
            Consent Preferences
          </a>

          <NextLink href="/apply">Apply</NextLink>
          <NextLink href="/volunteer">Get Involved</NextLink>
        </div>
      </Section>
    </footer>
  );
}
