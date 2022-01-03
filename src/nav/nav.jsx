import React from "react";
import styles from "./nav.module.css";

const Nav = (props) => (
  <nav className={styles.nav}>
    <div className={styles["nav-content"]}>
      <span>마이튜브</span>
      <div className={styles["search-form"]}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className={styles["search-form-input"]}
            type="text"
            placeholder="검색어를 입력하세요"
          />
        </form>
      </div>
    </div>
  </nav>
);

export default Nav;
