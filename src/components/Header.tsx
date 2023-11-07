import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import ExpandHeader from "./ExpandHeader";
import { useEffect, useRef, useState } from "react";
import { ExtraNavSchema } from "./schema";
import { useRouter } from "next/router";

const Header = () => {
  const [expandNav, setExpandNav] = useState<ExtraNavSchema>(null);
  const query = useRouter();
  const pathname = query.pathname.replace("/", "");

  const selectRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clk = (e: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(e.target as HTMLDivElement)
      ) {
        setExpandNav(null);
      }
    };
    window.addEventListener("click", clk);
    return () => {
      window.removeEventListener("click", clk);
    };
  }, []);

  const onMenuClick = (selectedMenu: ExtraNavSchema) => {
    setExpandNav((prev) => (prev === selectedMenu ? null : selectedMenu));
  };

  return (
    <header className={`${styles.header} ${styles[pathname]}`} ref={selectRef}>
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
        <nav className={styles.nav}>
          <div onClick={() => onMenuClick("ProductMenu")}>
            <span
              className={expandNav === "ProductMenu" ? styles.activeTab : ""}
            >
              Produkt
              {expandNav === "ProductMenu" ? (
                <PiCaretUpLight />
              ) : (
                <PiCaretDownLight />
              )}
            </span>
          </div>
          <div>
            <Link href="/pricing">Preise</Link>
          </div>
          <div onClick={() => onMenuClick("SupportMenu")}>
            <span
              className={expandNav === "SupportMenu" ? styles.activeTab : ""}
            >
              Support & Wissen
              {expandNav === "SupportMenu" ? (
                <PiCaretUpLight />
              ) : (
                <PiCaretDownLight />
              )}
            </span>
          </div>
          <div>
            <Link href="/UnserTeam">Unternehmen</Link>
          </div>
          <div>
            <Link href="/contact">
              <BsFillTelephoneFill />
              Sprich mit Sales
            </Link>
          </div>
        </nav>
        <div className={styles.user}>
          <Link href="/login" className={styles.loginButton}>
            Login
          </Link>
          <Link href="/signup" className={styles.signupButton}>
            Jetzt loslegen
          </Link>
        </div>
      </div>
      <ExpandHeader selectedMenu={expandNav} />
    </header>
  );
};

export default Header;
