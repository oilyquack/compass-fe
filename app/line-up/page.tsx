import NextLink from "next/link";

import Section from "@/components/Section";
import artists from "@/data/artists.json";

import styles from "./LineUp.module.css";
import Artist from "../artist/components/Artist";

export default function LineUpPage() {
  return (
    <Section>
      <h1 className="mg-btm-lg">Line Up</h1>

      <ul className={styles.LineUp}>
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
