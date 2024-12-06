// src/components/common/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"; // 로고 이미지 경로
import styles from "./Header.module.css"; // CSS Modules

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className={styles.header}>
      {/* 로고 및 네비게이션 */}
      <div className={styles.leftSection}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Site Logo" className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navItem}>
                홈
              </Link>
            </li>
            <li>
              <Link to="/notice" className={styles.navItem}>
                공지사항
              </Link>
            </li>
            <li>
              <Link to="/board" className={styles.navItem}>
                게시판
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 검색바 */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>검색</button>
      </div>

      {/* 로그인/로그아웃 버튼 */}
      <div className={styles.rightSection}>
        {isLoggedIn ? (
          <button onClick={handleLoginLogout} className={styles.authButton}>
            로그아웃
          </button>
        ) : (
          <>
            <Link to="/login" className={styles.authButton}>
              로그인
            </Link>
            <span className={styles.separator}> | </span>
            <Link to="/signup" className={styles.authButton}>
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
