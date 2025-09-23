import Image from "next/image";
import { notFound } from "next/navigation";

import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import Section from "@/components/Section";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import artists from "@/data/artists.json";
import { ArtistInterface } from "@/interfaces/artist.interface";

import styles from "./Artist.module.css";
import "@/styles/globals.css";

type ArtistPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return artists.map((artist: ArtistInterface) => ({
    slug: artist.slug,
  }));
}

export default function ArtistPage({ params }: ArtistPageProps) {
  const artist =
    artists.find((a: ArtistInterface) => a.slug === params.slug) || null;

  if (!artist) {
    notFound();
  }

  return (
    <div className={styles.Layout}>
      <Section>
        <div className={styles.Artist}>
          <div className={styles["Artist-imageOuterWrapper"]}>
            <span className={styles["Artist-star"]} />
            <div className={`${styles["Artist-imageWrapper"]} mg-btm-xl`}>
              <Image
                alt={artist.name}
                className={styles["Artist-image"]}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                src={`/images/artists/${artist.slug}/main.jpg`}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className={styles["Artist-crescent"]} />
          </div>
          <div className={styles["Artist-content"]}>
            <span className={styles["Artist-worm"]} />
            <h1
              className={`${styles["Artist-title"]} font-size-xxxl mg-btm-sm`}
            >
              {artist.name}
            </h1>
            <p className="font-family-lato mg-btm-md">{artist.location}</p>
            <div className="mg-btm-md">
              <SocialLinks artist={artist} />
            </div>
            <p className={`${styles["Artist-bio"]} mg-btm-lg`}>{artist.bio}</p>
            {artist.embedString ? (
              <MusicPlayer embedString={artist.embedString} />
            ) : null}
          </div>
        </div>
      </Section>
    </div>
  );
}
