import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import artists from "@/data/artists.json";
import { ArtistInterface } from "@/interfaces/artist.interface";
import styles from "./Artist.module.css";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";

import "@/styles/globals.css";

export default function ArtistPage({ artist }: { artist: ArtistInterface }) {
  return (
    <div className={styles.Layout}>
      <Section>
        <NavBar />
      </Section>
      <Section>
        <div className={styles.Artist}>
          <div className={styles["Artist-imageOuterWrapper"]}>
            <span className={styles["Artist-star"]} />
            <div className={`${styles["Artist-imageWrapper"]} mg-btm-lg`}>
              <Image
                alt={artist.name}
                className={styles["Artist-image"]}
                fill
                src={`/images/artists/${artist.slug}/main.jpg`}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className={styles["Artist-crescent"]} />
          </div>
          <div className={styles["Artist-content"]}>
            <span className={styles["Artist-worm"]} />
            <h1
              className={`${styles["Artist-title"]} font-size-xxxl mg-btm-md`}
            >
              {artist.name}
            </h1>
            <div className="mg-btm-md">
              <SocialLinks artist={artist} />
            </div>
            <p className={`${styles["Artist-bio"]} mg-btm-md`}>{artist.bio}</p>
            {artist.embedString ? (
              <MusicPlayer embedString={artist.embedString} />
            ) : null}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: artists.map((artist) => ({ params: { slug: artist.slug } })),
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const artist = artists.find((a) => a.slug === slug) || null;
  return {
    props: { artist },
  };
};
