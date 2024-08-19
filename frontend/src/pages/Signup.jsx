import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/start/signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    pw: '',
    phone: '',
    identify: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted', formData);
    navigate('/complete');
  };

  return (
    <div className="signup">
      <h5>홀로서기</h5>
      <h6>병원 키오스크 연습 웹</h6>
      <form onSubmit={handleSubmit}>
        <h7>이름</h7>
        <input
          className="text_area"
          type="text"
          name="name"
          placeholder="이름을 입력해주세요."
          value={formData.name}
          onChange={handleChange}
        />

        <h7>아이디</h7>
        <input
          className="text_area"
          type="text"
          name="id"
          placeholder="아이디를 입력해주세요."
          value={formData.id}
          onChange={handleChange}
        />

        <h7>비밀번호</h7>
        <input
          className="text_area"
          type="password"
          name="pw"
          placeholder="비밀번호"
          value={formData.pw}
          onChange={handleChange}
        />

        <h7>전화번호</h7>
        <input
          className="text_area"
          type="text"
          name="phone"
          placeholder="전화번호(-제외)"
          value={formData.phone}
          onChange={handleChange}
        />

        <h7>주민번호</h7>
        <input
          className="text_area"
          type="text"
          name="ssn"
          placeholder="주민번호(-제외)"
          value={formData.ssn}
          onChange={handleChange}
        />

        <button className="btn2" type="submit">회원가입</button>
      </form>
      <Link className="goback" to="/">계정이 이미 있으신가요?</Link>
    </div>
  );
}

export default Signup;