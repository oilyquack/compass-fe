import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Compass Festival</h1>

      <br />

      <Link href="/mailing-list" target="_blank">
        Join the mailing list
      </Link>
    </div>
  );
}
