import React from 'react';
import MainButton from './MainButton';
import styled from 'styled-components';
interface ButtonListProps {
  contentList: Array<string>;
}

//흰색 가로 버튼(MainButton)들의 목록
const ButtonList: React.FC<ButtonListProps> = ({ contentList }) => {
  //버튼 내용 입력받아 버튼 목록 생성
  const buttonList = contentList.map((content: string, index: number) => (
    <MainButton text={content} />
  ));

  return <BtnWrapper>{buttonList}</BtnWrapper>;
};

export default ButtonList;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;
