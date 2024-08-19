import { useNavigate } from 'react-router-dom';
import '../styles/start/complete.css';

function Complete() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="complete">
      <img src="/images/check.png" alt="체크" className="check" />
      <h1>회원가입이 완료되었습니다.</h1>
      <button className="btn3" type="button" onClick={handleButtonClick}> 로그인 화면으로 돌아가기 </button>
    </div>
  );
}

export default Complete;