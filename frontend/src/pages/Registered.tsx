import { FloatingBtn, KioskLayout, MainHeader } from '../components/common';
import { useParams } from 'react-router-dom';
import { SCENE1_STEP_NAME } from '../consts';
import { Container, Title, Wrapper } from '../styles/registered/RegisteredStyle';
import { Step1, Step2 } from '../components/registered';
import { FloatingBtn,MainHeader, KioskLayout, KeypadLayout} from '../components/common';
import { useParams, useNavigate } from 'react-router-dom';
import { SCENE1_STEP_NAME } from '../consts';
import { Container, Title, Wrapper } from '../styles/registered/RegisteredStyle';

// Step1 컴포넌트
const Step1: React.FC = () => {
    const navigate = useNavigate();

    const handleConfirm = (inputValue: string) => {
        if (inputValue.length === 13) { // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
            console.log('입력된 전화번호:', inputValue);
            navigate('/scene1/2'); // 다음 스텝으로 이동
        } else {
            alert('올바른 전화번호를 입력해주세요.');
        }
    };

    return (
        <div>
            <KeypadLayout onConfirm={handleConfirm} /> {/* onConfirm prop을 전달 */}
        </div>
    );
};

const Step2 = () => {
    // 랜덤 숫자 생성 (1에서 10 사이)
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    return (
        <div>
            <p style={{fontSize: '20px', margin: '0'}}>환자분의 대기 순번은</p>
            <h1 style={{fontSize: '80px'}}>{randomNumber}번</h1>
            <br/><br/>
            <p style={{fontSize: '18px', margin: '0'}}>진료실로 들어가실 때 <br/>성함을 불러드립니다 ✨</p>
        </div>
    );
};
>>>>>>> 1999a1ce5ba0deb478dd7d94c849a9d9ea98168b

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
