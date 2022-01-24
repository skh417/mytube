import React from "react";
import styles from "./view-more.module.css";

const ViewMore = ({ onViewMoreClick }) => {
  return (
    <section className={styles["view-more"]}>
      <button className={styles["view-more-button"]} onClick={onViewMoreClick}>
        더 보기
      </button>
    </section>
  );
};

export default ViewMore;
