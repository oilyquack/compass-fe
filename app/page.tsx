import NextImage from "next/image";

import Button from "@/components/Button";
import MusicPlayer from "@/components/MusicPlayer";
import Section from "@/components/Section";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <Section className={styles.Home}>
      <div className={styles["Home-content"]}>
        <div className={styles["Home-logoWrapper"]}>
          <NextImage
            alt="Compass Logo"
            className={styles["Home-logo"]}
            height={302}
            priority
            width={580}
            src="/images/compass-logo.png"
          />
        </div>

        <p className="font-size-xl mg-btm-lg">
          Thank you for for an exceptional 2nd edition
        </p>

        <p className="font-size-md mg-btm-lg">
          Sign up to our newsletter to be the first to know about our 2026 plans
        </p>

        <div className="mg-btm-lg">
          <Button href="/mailing-list" target="_blank">
            Join the mailing list
          </Button>
        </div>

        <MusicPlayer embedString="<iframe style='border-radius:12px' src='https://open.spotify.com/embed/playlist/32AoxMwYCLeQ697aoznPyi?utm_source=generator&theme=0' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>" />
      </div>
    </Section>
  );
}
