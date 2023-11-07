import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "@/styles/Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              alt="gastromatic logo"
              src="https://www.gastromatic.com/wp-content/uploads/2019/08/gastromatic_logo_icon_typo_rgb.svg"
              width="170"
              height="29"
            />
          </Link>
        </div>
        <RxHamburgerMenu />
      </div>
      {/* Header contents */}
    </header>
  );
}

export default MobileHeader;
