import React from "react";
import styles from "@/styles/NueAnimation.module.scss";
function NeuAnimation() {
  return (
    <div className={styles.bouncingLetters}>
      <span className={styles.letter}>N</span>
      <span className={styles.letter}>E</span>
      <span className={styles.letter}>U</span>
    </div>
  );
}

export default NeuAnimation;
