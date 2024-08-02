import React from 'react';
import MainButton from './btn-main';

interface ButtonListProps {
  contentList: Array<string>;
}

const ButtonList: React.FC<ButtonListProps> = ({ contentList }) => {
  //버튼 내용 입력받아 버튼 목록 생성
  const buttonList = contentList.map((content: string, index: number) => (
    <MainButton key={index} text={content} />
  ));

  return <div className="flex flex-col gap-5 mb-10">{buttonList}</div>;
};

export default ButtonList;
