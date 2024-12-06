import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import memberRouter from "./memberRouter";

const AppRouter = () => {
  return (
    <Routes>
      {memberRouter}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
