import NextImage from "next/image";

import Section from "@/components/Section";

import styles from "./Venues.module.css";

export default function VenuesPage() {
  return (
    <Section className={styles.Venues}>
      <div className={styles["Venues-imageWrapper"]}>
        <NextImage
          alt="Compass Map"
          className={styles["Venues-image"]}
          fill
          src="/images/compass-venues-map.jpg"
          style={{ objectFit: "cover" }}
        />
      </div>
    </Section>
  );
}
