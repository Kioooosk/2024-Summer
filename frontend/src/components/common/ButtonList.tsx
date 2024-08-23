import styled from 'styled-components';
import MainButton from './MainButton';
import SubButton from './SubButton';
import { useNavigate } from 'react-router-dom';
import { MAIN_LINKS } from '../../consts';
interface ButtonListProps {
  buttonType: string; //'main' or 'sub'
  contentList: Array<string>;
}

//흰색 가로 버튼(MainButton)들의 목록
function ButtonList({ buttonType, contentList }: ButtonListProps) {
  //버튼 내용 입력받아 버튼 목록 생성
  const buttonList = contentList.map((content: string, index: number) =>
    buttonType === 'main' ? (
      <MainButton goLink={MAIN_LINKS[index]} text={content} />
    ) : (
      <SubButton text={content} />
    )
  );

  return <BtnWrapper>{buttonList}</BtnWrapper>;
}

export default ButtonList;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;
