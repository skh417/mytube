import React, { useRef, memo } from "react";
import styles from "./nav.module.css";
import logo from "../images/youtube-logo.png";

const Nav = memo(({ onSearch, setSelectVideo }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const query = inputRef.current.value;
    onSearch(query);
  };

  const onSearchButtonClick = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const moveToHome = () => {
    setSelectVideo(null);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-content"]}>
        <div className={styles.logo} onClick={moveToHome}>
          <img src={logo} alt="logo" style={{ width: 50, height: 100 + "%" }} />
          <span className={styles["logo-text"]}>마이튜브</span>
        </div>
        <div className={styles["search-form"]}>
          <form onSubmit={onSearchButtonClick}>
            <input
              className={styles["search-form-input"]}
              type="search"
              placeholder="검색어를 입력하세요"
              ref={inputRef}
            />
          </form>
          <button
            className={styles["search-button"]}
            type="submit"
            onClick={onSearchButtonClick}
          >
            검색
          </button>
        </div>
      </div>
    </nav>
  );
});

export default Nav;
