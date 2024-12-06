import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/member/Login"; // 로그인 페이지
import Enroll from "../pages/member/Enroll"; // 회원가입 페이지

const memberRouter = [
  <Route path="/login" element={<Login />} />,
  <Route path="/Signup" element={<Enroll />} />,
];

export default memberRouter;
