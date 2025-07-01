import { notFound } from "next/navigation";

import artists from "../../../data/artists.json";
import MusicPlayer from "./components/MusicPlayer";
import SocialLinks from "./components/SocialLinks";
import styles from "./Artist.module.css";

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
    <div className={styles.Artist}>
      <img
        alt={artist.name}
        className={`${styles["Artist-image"]} mg-btm-lg`}
        src={`/images/artists/${artist.slug}/main.jpg`}
      />

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
  );
}
