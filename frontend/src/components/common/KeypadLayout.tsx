import React, { useState } from 'react';
import styled from 'styled-components';

interface KeypadLayoutProps {
  onConfirm: (inputValue: string) => void; // 부모 컴포넌트에서 전달받은 확인 버튼 핸들러
}

const KeypadLayout: React.FC<KeypadLayoutProps> = ({ onConfirm }) => {
  const [inputValue, setInputValue] = useState('');

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1,3})(\d{0,4})(\d{0,4})$/);

    if (match) {
      if (match[2]) {
        return `${match[1]}-${match[2]}${match[3] ? `-${match[3]}` : ''}`;
      }
      return match[1];
    }
    return value;
  };

  const handleButtonClick = (value: string) => {
    if (inputValue.replace(/\D/g, '').length < 11) {
      const newValue = inputValue + value;
      setInputValue(formatPhoneNumber(newValue));
    }
  };

  const handleClearClick = () => {
    const newValue = inputValue.slice(0, -1);
    setInputValue(formatPhoneNumber(newValue));
  };

  const handleConfirmClick = () => {
    onConfirm(inputValue); // 부모 컴포넌트로 현재 입력값을 전달하여 처리
  };

  return (
    <Container>
      <InputDisplay>{inputValue}</InputDisplay>
      <Keypad>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((number) => (
          <KeypadButton key={number} onClick={() => handleButtonClick(number)}>
            {number}
          </KeypadButton>
        ))}
        <ActionButton color="#d9534f" onClick={handleClearClick}>
          지우기
        </ActionButton>{' '}
        {/* 빨간색 버튼 */}
        <KeypadButton key="0" onClick={() => handleButtonClick('0')}>
          0
        </KeypadButton>
        <ActionButton color="#0275d8" onClick={handleConfirmClick}>
          확인
        </ActionButton>{' '}
        {/* 파란색 버튼 */}
      </Keypad>
    </Container>
  );
};

export default KeypadLayout;

// styled-components for styling (same as before)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputDisplay = styled.div`
  width: 260px;
  height: 25px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const KeypadButton = styled.button`
  width: 80px;
  height: 60px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
  font-family: Suite;
  &:active {
    background-color: #d0d0d0;
  }
`;

const ActionButton = styled.button<{ color: string }>`
  width: 80px;
  height: 60px;
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-family: Suite;
  color: #fff;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;
