"use client";

import dynamic from "next/dynamic";

import styles from "./MailingList.module.css";

const BrevoForm = dynamic(() => import("./BrevoForm"), { ssr: false });

export default function MailingList() {
  return (
    <div className={styles.MailingList}>
      <BrevoForm />
    </div>
  );
}
