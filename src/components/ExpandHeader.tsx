import React from "react";
import styles from "@/styles/ExpandedHeader.module.scss";
import ProductMenu from "./ProductMenu";
import SupportMenu from "./SupportMenu";
import { ExtraNavSchema } from "./schema";

interface Props {
  selectedMenu: ExtraNavSchema;
}
const ExpandHeader: React.FC<Props> = ({ selectedMenu }) => {
  const renderComponent = () => {
    switch (selectedMenu) {
      case "ProductMenu":
        return <ProductMenu />;
      case "SupportMenu":
        return <SupportMenu />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.menuTrigger} ${
        !!selectedMenu ? styles.openMenuTrigger : ""
      }`}
    >
      <div className={styles.container}>{renderComponent()}</div>
    </div>
  );
};

export default ExpandHeader;
