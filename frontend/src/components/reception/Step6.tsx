import { FaRegCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ContentTitle, EndButton } from '../../styles/reception/ReceptionStyle';

//결제완료
export function Step6() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/mainpage');

  return (
    <>
      <FaRegCheckCircle size={80} style={{ margin: '50 0' }} />
      <ContentTitle>
        수납 과정이 모두 끝났습니다.
        <br />
        수고하셨습니다.
      </ContentTitle>
      <EndButton onClick={handleClick}>첫 화면으로 돌아가기</EndButton>
    </>
  );
}
