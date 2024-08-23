import { FloatingBtn, KioskLayout, MainHeader } from '../components/common';
import { useParams } from 'react-router-dom';
import { SCENE1_STEP_NAME } from '../consts';
import { Container, Title, Wrapper } from '../styles/registered/RegisteredStyle';
import { Step1, Step2 } from '../components/registered';

const StepComponent = () => {
    const { step } = useParams(); //현재 페이지의 스텝 번호 받아오기
    const stepName = SCENE1_STEP_NAME[Number(step) - 1];
    const { stepTitle, stepSubtitle, stepDescription, advice } = stepName;

    //n번째 단계, ... 부분
    const renderTitle = () => {
        return (
            <Title>
                {stepTitle}
                <br />
                {stepSubtitle}
            </Title>
        );
    };

    //키오스크 레이아웃 안에 들어가는 부분
    const renderStepComponent = () => {
        switch (step) {
            case '1':
                return <Step1 />;
            case '2':
                return <Step2 />;
            default:
                return <h1>Not Found</h1>;
        }
    };

    //타이틀 + 껍데기 + 플로팅 버튼 내보내기
    return (
        <>
            {renderTitle()}
            <KioskLayout
                contentTitle={stepDescription}
                children={renderStepComponent()}
            />
            <FloatingBtn advice={advice} />
        </>
    );
};

export default function Registered() {
    return (
        <Wrapper>
            <MainHeader />
            <Container>
                <StepComponent />
            </Container>
        </Wrapper>
    );
}
