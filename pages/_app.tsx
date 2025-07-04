import type { AppProps } from "next/app";
import { Lato, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${lato.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
