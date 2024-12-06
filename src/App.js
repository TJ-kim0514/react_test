import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import AppRouter from "./routers/router";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
