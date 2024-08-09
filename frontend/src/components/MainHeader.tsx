import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <ArrowIcon onClick={handleClick}>
        <FaArrowLeft />
      </ArrowIcon>
      <Title>병원 키오스크 연습용 웹, 홀로서기✨</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #474747;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  position: relative;
`;

const ArrowIcon = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  left: 10px;
`;

const Title = styled.p`
  font-family: Suite;
  color: #fff;
  text-align: center;
`;
