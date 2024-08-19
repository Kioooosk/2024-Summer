import React, { useState } from 'react';
import { FloatingBtn, Header, KioskLayout, KeypadLayout, YesNoButton, SubButton } from '../components';
import { useParams, useNavigate } from 'react-router-dom';
import { SCENE3_STEP_NAME } from '../consts';
import { Container, Title, Wrapper } from '../styles/registered/RegisteredStyle';
import { SubBtnWrapper } from '../styles/reception/ReceptionStyle';

// Step1: 이름 입력 (키보드를 사용)
const Step1: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleConfirm = () => {
        if (name.trim().length > 0) {
            console.log('입력된 이름:', name);
            navigate('/certificate/2'); // 다음 스텝으로 이동
        } else {
            alert('이름을 입력해주세요.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontSize: '20px', padding: '10px', width: '100%' }}
            />
            <button onClick={handleConfirm} style={{ marginTop: '20px' }}>
                확인
            </button>
        </div>
    );
};

// Step2: 전화번호 입력 (KeypadLayout 사용)
const Step2: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = (inputValue: string) => {
    if (inputValue.length === 13) { // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
      console.log('입력된 전화번호:', inputValue);
      navigate('/certificate/3'); // 다음 스텝으로 이동
    } else {
      alert('올바른 전화번호를 입력해주세요.');
    }
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} /> {/* useHyphen true 설정 */}
    </div>
  );
};

// Step3: 주민번호 입력 (KeypadLayout 사용)
const Step3: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = (inputValue: string) => {
    if (/^\d{6}-\d{7}$/.test(inputValue)) { // 주민번호가 올바른 형식(6-7, 총 14자)인지 확인
      console.log('입력된 주민번호:', inputValue);
      navigate('/certificate/4'); // 다음 스텝으로 이동
    } else {
      alert('올바른 주민번호를 입력해주세요.');
    }
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} /> {/* useHyphen true 설정 */}
    </div>
  );
};


// Step4: 진단명 포함 여부 선택
const Step4: React.FC = () => {
    const navigate = useNavigate();

    const handleInclude = (includeDiagnosis: boolean) => {
        if (includeDiagnosis) {
            console.log('진단명을 포함합니다.');
        } else {
            console.log('진단명을 포함하지 않습니다.');
        }
        navigate('/certificate/5'); // 다음 스텝으로 이동
    };

    return (
        <div>
            <p style={{ fontSize: '20px' }}>진단명을 포함하시겠습니까?</p>
            {/* props 이름을 onYes와 onNo로 변경 */}
            <YesNoButton onYes={() => handleInclude(true)} onNo={() => handleInclude(false)} />
        </div>
    );
};

// Step5: 증명서 종류 선택
const Step5: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/certificate/6');
    };

    return (
        <SubBtnWrapper>
            <SubButton text="소견서" onClick={handleClick} />
            <SubButton text="진단서" onClick={handleClick} />
            <SubButton text="진료비 영수증" onClick={handleClick} />
            <SubButton text="수술 확인서" onClick={handleClick} />
            <SubButton text="입·퇴원 확인서" onClick={handleClick} />
        </SubBtnWrapper>
    );
};

const Step6: React.FC = () => {
    return (
        <div style={{textAlign: 'center'}}> {/* 텍스트와 이미지가 가운데 정렬되도록 스타일 추가 */}
          <p style={{ fontSize: '20px', margin: '0' }}><br /><br />
            아래 프린터기에서 <br />
            환자분의 증명서가<br />
            인쇄되는 중입니다.
          </p>
          <br/>
            <img src="../../public/images/down-arrow.png"/>
        </div>
    );
};

// StepComponent: 각 스텝을 렌더링
const StepComponent: React.FC = () => {
    const {step} = useParams<{ step: string }>();
    const stepName = SCENE3_STEP_NAME[Number(step) - 1];

    const renderTitle = () => (
        <Title>
            {stepName.stepTitle}
            <br/>
            {stepName.stepSubtitle}
        </Title>
    );

    const renderStepComponent = () => {
        switch (step) {
            case '1':
                return <Step1/>;
            case '2':
                return <Step2/>;
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
};

// Scene3: 최종 내보내기
export default function Certificate() {
    return (
        <Wrapper>
            <Header />
            <Container>
                <StepComponent />
            </Container>
        </Wrapper>
    );
}
