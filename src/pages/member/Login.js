import React from "react";

function Login() {
  return (
    <div style={styles.container}>
      <h2>로그인 페이지</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username">아이디:</label>
          <input type="text" id="username" placeholder="아이디를 입력하세요" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <button type="submit" style={styles.button}>
          로그인
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  form: {
    display: "inline-block",
    textAlign: "left",
  },
  inputGroup: {
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#2db400",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Login;
