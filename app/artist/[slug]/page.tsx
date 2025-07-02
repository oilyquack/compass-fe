import NextImage from "next/image";
import { notFound } from "next/navigation";

import artists from "../../../data/artists.json";
import MusicPlayer from "./components/MusicPlayer";
import SocialLinks from "./components/SocialLinks";
import styles from "./Artist.module.css";

import Section from "../../components/Section";

export async function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    notFound();
  }

  return (
    <Section>
      <div className={styles.Artist}>
        <div className={`${styles["Artist-imageWrapper"]} mg-btm-lg`}>
          <NextImage
            alt={artist.name}
            className={styles["Artist-image"]}
            fill
            src={`/images/artists/${artist.slug}/main.jpg`}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles["Artist-content"]}>
          <h1 className="mg-btm-md">{artist.name}</h1>
          <div className="mg-btm-md">
            <SocialLinks artist={artist} />
          </div>
          <p className="mg-btm-md">{artist.bio}</p>
          {artist.embedString ? (
            <MusicPlayer embedString={artist.embedString} />
          ) : null}
        </div>
      </div>
    </Section>
  );
}
