import NextLink from "next/link";

import Artist from "@/components/Artist";
import Section from "@/components/Section";
import artists from "@/data/artists.json";

import styles from "./LineUp.module.css";

export default function LineUpPage() {
  return (
    <Section className={styles.LineUp}>
      <time className="font-size-md mg-btm-md">17th - 19th October 2025</time>

      <p className="font-family-lato font-size-sm mg-btm-lg">
        A celebration of grassroots music, independent artists & community by
        the sea in Folkestone, Kent.
      </p>

      <h1 className={`${styles["LineUp-title"]} font-size-xxl mg-btm-md`}>
        Line Up
      </h1>

      <p className="font-family-lato mg-btm-lg">
        First confirmed names - many more to come
      </p>

      <ul className={styles["LineUp-artists"]}>
        {artists.map((artist) => (
          <li key={artist.slug}>
            <NextLink href={`/artist/${artist.slug}`}>
              <Artist artist={artist} />
            </NextLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
