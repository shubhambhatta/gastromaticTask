import React from "react";
import styles from "@/styles/ExpandedHeader.module.scss";
import Image from "next/image";
import Link from "next/link";
import NeuAnimation from "./NeuAnimation";

const ProductMenu = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.subMenu}>
        <div className={styles.mainArea}>
          <Image
            src="https://www.gastromatic.com/wp-content/uploads/2023/09/wirtschaftlichkeit1.png"
            alt="small plant"
            height={36}
            width={36}
          />
          Wirtschaftlichkeit
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Dienstplan optimal gestalten
          </Link>
          <Link href="#" className={styles.subtitle}>
            Personalbedarfsplanung
          </Link>
          <Link href="#" className={styles.subtitle}>
            Dienstplan online
          </Link>
          <Link href="#" className={styles.subtitle}>
            Automatisierter Dienstplan
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Zeiten erfassen
          </Link>
          <Link href="#" className={styles.subtitle}>
            wetime – Stempeluhr App
          </Link>
          <Link href="#" className={styles.subtitle}>
            Stundenauswertung
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Controlling beflügeln
          </Link>
          <Link href="#" className={styles.subtitle}>
            Automatische Umsatzprognosen
          </Link>
          <Link href="#" className={styles.subtitle}>
            Personalkennzahlen <NeuAnimation />
          </Link>
        </div>
        <div className={styles.mainArea}> </div>
        <div className={styles.mainArea}>
          <Image
            src="https://www.gastromatic.com/wp-content/uploads/2023/09/hr_prozesse_v21.png"
            alt="people"
            height={36}
            width={36}
          />
          HR PROZESSE
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Verwaltung meistern
          </Link>
          <Link href="#" className={styles.subtitle}>
            Personalbedarfsplanung
          </Link>
          <Link href="#" className={styles.subtitle}>
            Dienstplan online
          </Link>
          <Link href="#" className={styles.subtitle}>
            Automatisierter Dienstplan
          </Link>
        </div>
        <div className={styles.gridItem}>
          <Link href="#" className={styles.title}>
            Löhne bezahlen
          </Link>
          <Link href="#" className={styles.subtitle}>
            wetime – Stempeluhr App
          </Link>
          <Link href="#" className={styles.subtitle}>
            Stundenauswertung
          </Link>
        </div>
      </div>
      <div className={`${styles.rightColumn} ${styles.gridItem}`}>
        <div className={styles.mainArea}>Marketplace</div>
        <div className={styles.positionRelative}>
          Alle Integrationen an einem Ort. Erweitere gastromatic, um deine
          Prozesse vollständig abzubilden.
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
