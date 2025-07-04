import Button from "@/components/Button";
import MusicPlayer from "@/components/MusicPlayer";
import Section from "@/components/Section";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <Section className={styles.Home}>
      <div className={styles["Home-content"]}>
        <div className={styles["Home-logoWrapper"]}>
          <img
            alt="Compass Logo"
            className={styles["Home-logo"]}
            src="/images/compass-logo.png"
          />
        </div>

        <time className="font-size-xl mg-btm-md">17th - 19th October 2025</time>

        <p className="font-size-lg mg-btm-md">Save the date</p>

        <p className="font-size-md mg-btm-lg">
          A celebration of grassroots music, independent artists & community by
          the sea in Folkestone, Kent.
        </p>

        <div className="mg-btm-md">
          <Button href="/line-up">Lineup</Button>
        </div>

        <div className="mg-btm-lg">
          <Button
            destination="outbound"
            href="https://docs.google.com/forms/d/e/1FAIpQLScmHxSjH-NEGxdbWG3dpiMRMtDGJWc0MdyUE8w3oE-9sadRxQ/viewform?usp=dialog"
            target="_blank"
          >
            Apply to play
          </Button>
        </div>

        <p className="font-size-sm mg-btm-lg">
          Tickets and more info coming soon
        </p>
        <MusicPlayer embedString="<iframe style='border-radius:12px' src='https://open.spotify.com/embed/playlist/32AoxMwYCLeQ697aoznPyi?utm_source=generator&theme=0' width='100%' height='152' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>" />
      </div>
    </Section>
  );
}
