import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/start/login.css";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const idValue = event.target.id.value;
    const pwValue = event.target.pw.value;

    if (idValue && pwValue) {
      // 로그인 상태를 sessionStorage에 저장
      sessionStorage.setItem("isLogin", true);

      navigate('/MainPage');
    } else {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요.');
    }
  };

  return (
    <div className="login">
      <img src="/images/MainpageIcon.png" alt="시작화면" className="icon" />
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

        <button className="btn" type="submit">로그인</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <Link className="link" to="/signup">처음 오셨나요?</Link>
      <Link className="link" to="/MainPage">로그인 없이 둘러보기</Link>
    </div>
  )
}

export default Login;