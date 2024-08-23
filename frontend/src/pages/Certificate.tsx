import { useParams } from 'react-router-dom';
import { SCENE3_STEP_NAME } from '../consts';
import {
  Container,
  Title,
  Wrapper,
} from '../styles/registered/RegisteredStyle';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
} from '../components/certificate';
import { FloatingBtn, KioskLayout, MainHeader } from '../components/common';

// StepComponent: 각 스텝을 렌더링
function StepComponent() {
  const { step } = useParams<{ step: string }>();
  const stepName = SCENE3_STEP_NAME[Number(step) - 1];

  const renderTitle = () => (
    <Title>
      {stepName.stepTitle}
      <br />
      {stepName.stepSubtitle}
    </Title>
  );

  const renderStepComponent = () => {
    switch (step) {
      case '1':
        return <Step1 />;
      case '2':
        return <Step2 />;
      case '3':
        return <Step3 />;
      case '4':
        return <Step4 />;
      case '5':
        return <Step5 />;
      case '6':
        return <Step6 />;
      default:
        return <h1>Not Found</h1>;
    }
  };

  return (
    <>
      {renderTitle()}
      <KioskLayout
        contentTitle={stepName.stepDescription}
        children={renderStepComponent()}
      />
      <FloatingBtn advice={stepName.advice} />
    </>
  );
}

// Certificate: 최종 내보내기
function Certificate() {
  return (
    <Wrapper>
      <MainHeader />
      <Container>
        <StepComponent />
      </Container>
    </Wrapper>
  );
}

export default Certificate;
