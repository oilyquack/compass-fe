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

        <time className="font-size-xl mg-btm-md">17th - 18th October 2025</time>

        <p className="font-size-md mg-btm-lg">
          A celebration of grassroots music, independent artists & community by
          the sea in Folkestone, Kent.
        </p>

        <div className="mg-btm-md">
          <Button
            destination="outbound"
            target="_blank"
            rel="noopener noreferrer"
            href="/images/Compass_Clash_Finder.jpg"
          >
            Clashfinder / Schedule
          </Button>
        </div>

        <div className="mg-btm-md">
          <Button href="/line-up">Lineup</Button>
        </div>

        <div className="mg-btm-md">
          <Button href="/tickets">Tickets</Button>
        </div>

        <MusicPlayer embedString="<iframe style='border-radius:12px' src='https://open.spotify.com/embed/playlist/32AoxMwYCLeQ697aoznPyi?utm_source=generator&theme=0' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>" />
      </div>
    </Section>
  );
}
