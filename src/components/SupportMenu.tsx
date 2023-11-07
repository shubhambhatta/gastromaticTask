import React from "react";
import styles from "@/styles/ExpandedHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

const SupportMenu: React.FC = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.subMenu}>
        <div className={styles.mainArea}>
          <Image
            src="https://www.gastromatic.com/wp-content/uploads/2023/09/support-wissen2.png"
            alt="person calling with headphone"
            height={36}
            width={36}
          />
          SUPPORT & WISSEN
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Wie wir dir helfen
          </Link>
          <Link href="#" className={styles.subtitle}>
            Onboarding
          </Link>
          <Link href="#" className={styles.subtitle}>
            Support
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Erfolgswissen
          </Link>
          <Link href="#" className={styles.subtitle}>
            Blog
          </Link>
          <Link href="#" className={styles.subtitle}>
            Poadcast
          </Link>
          <Link href="#" className={styles.subtitle}>
            Personal Wiki
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Community
          </Link>
          <Link href="#" className={styles.subtitle}>
            Kunden
          </Link>
          <Link href="#" className={styles.subtitle}>
            Partner
          </Link>
          <Link href="#" className={styles.subtitle}>
            Erfolgsstories
          </Link>
          <Link href="#" className={styles.subtitle}>
            POW
          </Link>
        </div>
      </div>
      <div className={`${styles.rightColumn} ${styles.gridItem}`}>
        <div className={styles.mainArea}>WEBINARE</div>
        <div className={styles.positionRelative}>
          Lerne unser Tool kennen - und zwar in einem Live-Webinar!
        </div>
      </div>
    </div>
  );
};

export default SupportMenu;
