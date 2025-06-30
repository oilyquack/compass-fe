import NextImage from "next/image";

import styles from "./SocialLinks.module.css";
import { ArtistInterface } from "../../../../line-up/artist.interface";

export default function SocialLinks({ artist }: { artist: ArtistInterface }) {
  return (
    <div className={styles.SocialLinks}>
      {artist.website && (
        <a href={artist.website} target="_blank" rel="noopener noreferrer">
          <NextImage
            src="/images/icons/globe.svg"
            alt="website"
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.facebook && (
        <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
          <NextImage
            src="/images/icons/facebook.svg"
            alt="Facebook"
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.instagram && (
        <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
          <NextImage
            src="/images/icons/instagram.svg"
            alt="Facebook"
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.tiktok && (
        <a href={artist.tiktok} target="_blank" rel="noopener noreferrer">
          <NextImage
            src="/images/icons/tiktok.svg"
            alt="Facebook"
            width={48}
            height={48}
          />
        </a>
      )}
    </div>
  );
}
