import NextImage from "next/image";

import { ArtistInterface } from "@/interfaces/artist.interface";

import styles from "./Artist.module.css";

export default function Artist({ artist }: { artist: ArtistInterface }) {
  return (
    <div className={styles.Artist}>
      <div className={styles["Artist-imageWrapper"]}>
        <NextImage
          alt={artist.name}
          className={styles["Artist-image"]}
          fill
          sizes="(max-width: 768px) 100vw, 615px"
          src={`/images/artists/${artist.slug}/grid.jpg`}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles["Artist-content"]}>
        <h2 className={styles["Artist-heading"]}>{artist.name}</h2>
      </div>
    </div>
  );
}
