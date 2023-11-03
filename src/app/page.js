import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import PdfComponent from "./components/pdf";

export default function Home() {
  return (
    <React.Suspense fallback="Loading...">
      <main className={styles.main}>
        <PdfComponent />
      </main>
    </React.Suspense>
  );
}
