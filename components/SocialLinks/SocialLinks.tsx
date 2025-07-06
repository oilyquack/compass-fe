import Facebook from "@/assets/Facebook";
import Globe from "@/assets/Globe";
import Instagram from "@/assets/Instagram";
import Spotify from "@/assets/Spotify";
import TikTok from "@/assets/TikTok";
import { ArtistInterface } from "@/interfaces/artist.interface";

import styles from "./SocialLinks.module.css";

export default function SocialLinks({ artist }: { artist: ArtistInterface }) {
  return (
    <div className={styles.SocialLinks}>
      {artist.website && (
        <a
          aria-label="Website"
          href={artist.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.facebook && (
        <a
          aria-label="Facebook"
          href={artist.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.instagram && (
        <a
          aria-label="Instagram"
          href={artist.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.tiktok && (
        <a
          aria-label="TikTok"
          href={artist.tiktok}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TikTok
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.spotify && (
        <a
          aria-label="Spotify"
          href={artist.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Spotify
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
    </div>
  );
}
