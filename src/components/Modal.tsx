import React, { useState } from "react";
import styles from "@/styles/modal.module.scss";
import { RxCross1 } from "react-icons/rx";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <RxCross1 />
        </button>
        {children}
      </div>
      <div className={styles.backdrop} onClick={onClose}></div>
    </div>
  ) : null;
};

export default Modal;
