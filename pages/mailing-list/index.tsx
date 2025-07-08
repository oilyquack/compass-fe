"use client";
import Head from "next/head";

import BrevoForm from "@/components/BrevoForm";

import styles from "./MailingList.module.css";

export default function MailingList() {
  return (
    <>
      <Head>
        <title>Compass Music</title>
        <meta
          name="description"
          content="A celebration of grassroots music, independent artists & community by the sea in Folkestone, Kent."
        />
      </Head>
      <div className={styles.MailingList}>
        <BrevoForm />
      </div>
    </>
  );
}
