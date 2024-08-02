import React from 'react';

interface ButtonProps {
  text: string;
}

//메인 페이지 흰색 버튼
const MainButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="bg-white w-[20.375rem] h-[3.25rem]
    border-2 border-btn-gray rounded shadow-3xl text-navy
    hover:outline hover:outline-2 hover:outline-blue-500"
    >
      {text}
    </button>
  );
};

export default MainButton;
