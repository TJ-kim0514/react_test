import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // jwt-decode jwt 토큰 사용시 필요한 패키지

function Enroll() {
  const [formData, setFormData] = useState({
    memId: "", // 아이디
    memPw: "", // 비밀번호
    memName: "", // 이름
    memEmail: "", // 이메일
    memAddress: "", // 주소
    memCellphone: "", // 휴대전화
    // memPhone: '',       // 일반전화
    memRnn: "", // 주민등록번호
    // memGovCode: '', // 관공서 코드
    memType: "ADMIN", // 회원타입
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const event = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 이벤트 발생 제거(submit 이벤트 취소) - 기본 폼 제출 방지

    const data = new FormData(); // 커맨드객체 작동을 위한 명칭 일치
    data.append("memId", formData.memId);
    data.append("memPw", formData.memPw);
    data.append("memName", formData.memName);
    data.append("memEmail", formData.memEmail);
    data.append("memAddress", formData.memAddress);
    data.append("memCellphone", formData.memCellphone);
    data.append("memRnn", formData.memRnn);

    try {
      await axios.post("http://localhost:8888/member", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("가입 성공");
      navigate("/");
    } catch (error) {
      console.error("가입 실패");
      console.log(formData);
      console.log(data);
      alert("가입실패");
    }
  };

  return (
    <div>
      <form enctype="multipart/form-data" onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" name="memName" onChange={handleChange}></input>
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="memId" onChange={handleChange}></input>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="text" name="memPw" onChange={handleChange}></input>
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input type="text"></input>
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="text"
                name="memEmail"
                onChange={handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>주민등록번호</td>
            <td>
              <input type="text" name="memRnn" onChange={handleChange}></input>
            </td>
          </tr>
          <tr>
            <td>휴대전화</td>
            <td>
              <input
                type="text"
                name="memCellphone"
                onChange={handleChange}
              ></input>
            </td>
          </tr>
        </table>
        <input type="submit" value="가입" />
      </form>
    </div>
  );
}

export default Enroll;
