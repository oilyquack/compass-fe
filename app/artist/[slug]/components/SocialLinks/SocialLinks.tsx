import Facebook from "@/assets/Facebook";
import Globe from "@/assets/Globe";
import Instagram from "@/assets/Instagram";
import TikTok from "@/assets/TikTok";

import styles from "./SocialLinks.module.css";
import { ArtistInterface } from "../../../../line-up/artist.interface";

export default function SocialLinks({ artist }: { artist: ArtistInterface }) {
  return (
    <div className={styles.SocialLinks}>
      {artist.website && (
        <a href={artist.website} target="_blank" rel="noopener noreferrer">
          <Globe
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.facebook && (
        <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.instagram && (
        <a href={artist.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
      {artist.tiktok && (
        <a href={artist.tiktok} target="_blank" rel="noopener noreferrer">
          <TikTok
            className={styles["SocialLinks-icon"]}
            width={48}
            height={48}
          />
        </a>
      )}
    </div>
  );
}
