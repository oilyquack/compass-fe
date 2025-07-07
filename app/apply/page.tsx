import styles from "./Apply.module.css";
import Section from "@/components/Section";

export default function ApplyPage() {
  return (
    <Section className={styles.Apply}>
      <h1 className="font-size-xxl mg-btm-lg">
        Applications closed for this year on{" "}
        <time dateTime="2025-07-07">7th&nbsp;July&nbsp;2025</time>
      </h1>
      <p className="font-family-lato font-size-lg mg-btm-md">
        We were proud to receive 359 applications!
      </p>
      <p className="font-family-lato font-size-lg">
        Come back after the festival for 2026 applications
      </p>
    </Section>
  );
}
