import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import Script from "next/script";

import PageLayout from "@/components/PageLayout";

import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  description:
    "A celebration of grassroots music, independent artists & community by the sea in Folkestone, Kent.",
  openGraph: {
    siteName: "Compass Music",
    title: "Compass Music",
  },
  title: "Compass Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Tag Manager */}
        <Script id="gtm-inline-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MZ67MDRL');
          `}
        </Script>

        {/* Termly.io - Cookie Consent and Compliance Notice */}
        <Script
          src="https://app.termly.io/resource-blocker/f4c2eed9-d24d-4537-8d9d-2046d5d77816?autoBlock=on"
          strategy="afterInteractive"
        />

        {/* Metricool - Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a) {
                var b = document.getElementsByTagName("head")[0],
                  c = document.createElement("script");
                c.type = "text/javascript";
                c.src = "https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange = a;
                c.onload = a;
                b.appendChild(c);
              }
              loadScript(function() {
                beTracker.t({ hash: "98917cdab84d97b3b27f6d0529f828e2" });
              });
            `,
          }}
        />
      </head>

      <body className={`${montserrat.variable} ${lato.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ67MDRL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
