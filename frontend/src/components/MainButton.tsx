import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
}

//흰색 가로 버튼
const MainButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default MainButton;

const Button = styled.button`
  background-color: white;
  width: 326px;
  height: 52px;
  border: 2px solid #d0d0d0;
  border-radius: 10px;
  font-size: 18px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  color: #091430;
  font-family: Suite;
  &:hover {
    border: 2px solid #3b82f6;
    cursor: pointer;
  }
`;
