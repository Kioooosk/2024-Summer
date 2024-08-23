import styled from 'styled-components';
import { MAIN_CONTENT_LIST } from '../consts';
import { ButtonList, MainHeader } from '../components/common';

export default function MainPage() {
  return (
    <Wrapper>
      <MainHeader />
      <Container>
        <Title>무엇을 연습해볼까요?</Title>
        <ButtonList buttonType="main" contentList={MAIN_CONTENT_LIST} />
        <ImageContainer>
          <TeamLabel>@Team eldkiz</TeamLabel>
          <img src="images/main-image.png" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 800px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #878787, #15204c);
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: left;
  color: white;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 224px;
`;

const TeamLabel = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
`;
