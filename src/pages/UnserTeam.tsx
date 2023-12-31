import React, { useState } from "react";
import styles from "@/styles/unserTeam.module.scss";
import headerStyle from "@/styles/Header.module.scss";
import Image from "next/image";
import { GrPlayFill } from "react-icons/gr";
import Modal from "@/components/Modal";

function UnserTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.bodywrapper}>
      <div className={styles.unserbody}>
        <div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div className={styles.languagePicker}>
              <div>
                <Image
                  src="https://www.gastromatic.com/wp-content/uploads/2019/10/beer.png"
                  alt="beer"
                  height={26}
                  width={26}
                />
              </div>
              <div>
                <Image
                  src="https://www.gastromatic.com/wp-content/uploads/2019/10/coconut.png"
                  alt="coconut"
                  height={26}
                  width={26}
                />
              </div>
              <div>
                <small>DE</small>
              </div>
              <div>
                <small>EN</small>
              </div>
            </div>
          </div>
          <h1 className={styles.shortHeadline}>UNSER TEAM</h1>
          <h2 className={styles.mainHeadline}>Wir sind gastromatic</h2>
          <p className={styles.description}>
            Und wir sind ganz schön stolz auf das, was uns ausmacht:
            Leidenschaft, eine dynamische Arbeitsweise, Vielfalt und viel
            Freiraum, um Ideen Wirklichkeit werden zu lassen. Und natürlich
            unser gemeinsames Ziel, Arbeiten immer wieder neu zu denken und
            damit etwas Großes zu schaffen. Du spürst schon die Euphorie? Warte,
            bis du bei uns bist.
          </p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <Image
          src="https://www.gastromatic.com/wp-content/uploads/2023/07/thumbnail_teamvideo_website_new-1200x672.png"
          alt="people"
          height={485}
          width={865}
        />
        <div className={styles.playButton} onClick={openModal}>
          <span>
            <GrPlayFill />
          </span>
        </div>
      </div>
      <section>
        <div className={styles.gastronoutes}>
          <div className={styles.textSection}>
            <h2 className={styles.mainHeadline}>
              Gastronaut*innen [gastʀo’naut*innen]
            </h2>
            <div className={styles.description} style={{ textAlign: "left" }}>
              Wer nach den Sternen greifen will, darf keine Flugangst haben.
              Daher nennen wir uns „Gastronaut*innen“ – augenzwinkernd und mit
              einem verschmitzten Lächeln, versteht sich. Gastronaut*innen sind
              offen, tüfteln gerne und nehmen die Dinge selbst in die Hand –
              aber zusammen sind sie am stärksten. Und obwohl jede*r hier
              einzigartig ist und auch mal leidenschaftlich diskutiert, teilen
              wir die gleichen Werte und eine gemeinsame Vision: eine bessere
              und erfolgreichere Arbeitswelt von morgen.
            </div>
            <div className={headerStyle.user}>
              <div className={headerStyle.loginButton}>Werde Gastronaut*in</div>
            </div>
          </div>
          <div className={styles.bild}>
            <Image
              src="https://www.gastromatic.com/wp-content/uploads/2019/10/TeamILLU_FIN_FIN-600x480.png"
              alt="people with dog"
              height={340}
              width={425}
            />
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          width="940"
          height="529"
          src="https://www.youtube.com/embed/r8tImCtf_G8"
          title="Wir sind gastromatic! #teamliebe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default UnserTeam;
