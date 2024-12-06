import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>홈 페이지</h1>
      <p className={styles.description}>여기는 홈 페이지입니다.</p>
    </div>
  );
}

export default Home;
