import Button from "./components/Button";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles["Home-logoWrapper"]}>
        <img
          alt="Compass Logo"
          className={styles["Home-logo"]}
          src="/images/compass-logo.svg"
        />
      </div>

      <time className="font-size-lg mg-btm-sm">17th - 19th OCTOBER 2025</time>

      <p className="font-size-md mg-btm-lg">SAVE THE DATE</p>

      <div className="mg-btm-md">
        <Button href="/mailing-list" target="_blank">
          JOIN THE MAILING LIST
        </Button>
      </div>

      <p className="font-size-sm">FULL WEBSITE & LINEUP COMING SOON</p>
    </div>
  );
}
