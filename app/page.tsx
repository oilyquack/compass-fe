import Button from "@/components/Button";
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
      </div>
    </Section>
  );
}
