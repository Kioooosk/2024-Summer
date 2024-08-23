import styled from 'styled-components';

interface ConfirmButtonProps {
  onConfirm: () => void;
}

function ConfirmButton({ onConfirm }: ConfirmButtonProps) {
  return (
    <ButtonContainer>
      <ActionButton onClick={onConfirm}>확인</ActionButton>{' '}
      {/* 파란색 길쭉한 버튼 */}
    </ButtonContainer>
  );
}

export default ConfirmButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 버튼을 가운데로 정렬 */
  margin-top: 5px;
`;

const ActionButton = styled.button`
  width: 100px; /* 버튼 너비를 넓게 설정 */
  height: 60px;
  background-color: #0275d8; /* 파란색 배경 */
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  font-family: 'Suite', sans-serif;

  &:active {
    opacity: 0.8;
  }
`;
