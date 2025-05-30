import Button from "./components/Button";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles["Home-logoWrapper"]}>
        <img
          alt="Compass Logo"
          className={styles["Home-logo"]}
          src="/images/compass-logo.png"
        />
      </div>

      <time className="font-size-xl mg-btm-md">17th - 19th OCTOBER 2025</time>

      <p className="font-size-lg mg-btm-md">SAVE THE DATE</p>

      <p className="font-size-md mg-btm-lg">
        A CELEBRATION OF GRASSROOTS MUSIC, INDEPENDENT ARTISTS & COMMUNITY BY
        THE SEA IN FOLKESTONE, KENT.
      </p>

      <div className="mg-btm-md">
        <Button href="/mailing-list" target="_blank">
          JOIN THE MAILING LIST
        </Button>
      </div>

      <div className="mg-btm-lg">
        <Button
          destination="outbound"
          href="https://docs.google.com/forms/d/e/1FAIpQLScmHxSjH-NEGxdbWG3dpiMRMtDGJWc0MdyUE8w3oE-9sadRxQ/viewform?usp=dialog"
          target="_blank"
        >
          APPLY TO PLAY
        </Button>
      </div>

      <p className="font-size-sm mg-btm-lg">
        FULL WEBSITE & LINEUP COMING SOON
      </p>
    </div>
  );
}
