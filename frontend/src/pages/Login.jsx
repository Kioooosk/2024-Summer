import { Link, useNavigate } from 'react-router-dom';
import '../styles/start/login.css';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (idValue, pwValue) => {
    try {
      const response = await axios.post('http://43.202.54.214:8080/signin', {
        id: idValue,
        pw: pwValue,
      });

      if (response.status === 200) {
        // 로그인 상태를 sessionStorage에 저장
        sessionStorage.setItem('isLogin', true);
        sessionStorage.setItem('userId', idValue);
        navigate('/mainpage');
      }
    } catch (e) {
      alert(e.response.data);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const idValue = event.target.id.value;
    const pwValue = event.target.pw.value;

    if (idValue && pwValue) {
      handleLogin(idValue, pwValue);
    }
  };

  return (
    <div className="login">
      <h1>병원 키오스크 연습 웹</h1>
      <h2>홀로서기</h2>
      <form onSubmit={handleSubmit}>
        <div className="text_area">
          <input
            type="text"
            id="id"
            name="id"
            placeholder="아이디"
            className="text_input"
          />
        </div>
        <div className="text_area">
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            className="text_input"
          />
        </div>

        <button className="btn" type="submit">
          로그인
        </button>
      </form>
      <Link className="link" to="/signup">
        처음 오셨나요?
      </Link>
      <Link className="link" to="/MainPage">
        로그인 없이 둘러보기
      </Link>
      <ImageContainer>
        <TeamLabel>@Team eldkiz</TeamLabel>
        <img src="images/main-image.png" />
      </ImageContainer>
    </div>
  );
}

export default Login;

const ImageContainer = styled.div`
  position: relative;
  height: 224px;
  top: 90px;
`;

const TeamLabel = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
`;
