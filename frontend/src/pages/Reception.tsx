import { useParams } from 'react-router-dom';
import { SCENE4_STEP_NAME } from '../consts';
import { Container, Title, Wrapper } from '../styles/reception/ReceptionStyle';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from '../components/reception';
import { FloatingBtn, KioskLayout, MainHeader } from '../components/common';

const StepComponent = () => {
  const { step } = useParams(); //현재 페이지의 스텝 번호 받아오기
  const stepName = SCENE4_STEP_NAME[Number(step) - 1];
  const { stepTitle, stepSubtitle, stepDescription, advice } = stepName;

  //n번째 단계, ... 부분
  const StepTitleComponent = (
    <Title>
      {stepTitle}
      <br />
      {stepSubtitle}
    </Title>
  );

  //키오스크 레이아웃 안에 들어가는 부분
  var StepContentComponent;
  switch (step) {
    case '1':
      StepContentComponent = <Step1 />;
      break;
    case '2':
      StepContentComponent = <Step2 />;
      break;
    case '3':
      StepContentComponent = <Step3 />;
      break;
    case '4':
      StepContentComponent = <Step4 />;
      break;
    case '5':
      StepContentComponent = <Step5 />;
      break;
    case '6':
      StepContentComponent = <Step6 />;
      break;
    default:
      StepContentComponent = <h1>Not Found</h1>;
  }

  //타이틀 + 껍데기 +플로팅 버튼 내보내기
  return (
    <>
      {StepTitleComponent}
      <KioskLayout
        contentTitle={stepDescription}
        children={StepContentComponent}
      />
      <FloatingBtn advice={advice} />
    </>
  );
};

export default function Reception() {
  return (
    <Wrapper>
      <MainHeader />
      <Container>
        <StepComponent />
      </Container>
    </Wrapper>
  );
}
