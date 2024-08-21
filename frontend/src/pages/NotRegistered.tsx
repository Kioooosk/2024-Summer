import React, { useState } from 'react';
import { FloatingBtn, MainHeader, KioskLayout, KeypadLayout, SubmitButton, SubButton } from '../components/common';
import { useParams, useNavigate } from 'react-router-dom';
import { SCENE2_STEP_NAME } from '../consts';
import { Container, Title, Wrapper } from '../styles/registered/RegisteredStyle';
import { SubBtnWrapper } from '../styles/reception/ReceptionStyle';

// Step1: 현재 대기 인원 확인
const Step1 = () => {
    const navigate = useNavigate();
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const handleInclude = (includeDiagnosis: boolean) => {
        if (includeDiagnosis) {
            console.log('접수를 진행합니다.');
        } else {
            console.log('접수를 취소합니다.');
        }
        navigate('/notregistered/2');
    };

    return (
        <div>
            <p style={{fontSize: '20px', margin: '0'}}>현재 대기 인원 수는</p>
            <h1 style={{fontSize: '80px'}}>{randomNumber}</h1>
            <br/><br/>
            <p style={{fontSize: '18px', margin: '0'}}>접수하시려면 아래 버튼을 눌러주세요</p>
            <SubmitButton submit={() => handleInclude(true)} onNo={() => handleInclude(false)} />
        </div>
    );
};

// Step2: 이름 입력
const Step2: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleConfirm = () => {
        if (name.trim().length > 0) {
            console.log('입력된 이름:', name);
            navigate('/notregistered/3'); 
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
                style={{ fontSize: '20px', padding: '10px', width: '80%' }}
            />
            <button onClick={handleConfirm} style={{ marginTop: '20px' }}>
                확인
            </button>
        </div>
    );
};

// Step3: 전화번호 입력
const Step3: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = (inputValue: string) => {
    if (inputValue.length === 13) { // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
      console.log('입력된 전화번호:', inputValue);
      navigate('/notregistered/4');
    } else {
      alert('올바른 전화번호를 입력해주세요.');
    }
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} />
    </div>
  );
};

// Step4: 주민번호 입력
const Step4: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = (inputValue: string) => {
    if (/^\d{6}-\d{7}$/.test(inputValue)) {
      console.log('입력된 주민번호:', inputValue);
      navigate('/notregistered/5'); // 다음 스텝으로 이동
      alert('올바른 주민번호를 입력해주세요.');
    }
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} /> 
    </div>
  );
};

// Step5: 진료과 선택
const Step5: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/notregistered/6');
    };

    return (
        <SubBtnWrapper>
            <SubButton text="정형외과" onClick={handleClick} />
            <SubButton text="이비인후과" onClick={handleClick} />
            <SubButton text="피부과" onClick={handleClick} />
            <SubButton text="내과" onClick={handleClick} />
            <SubButton text="산부인과" onClick={handleClick} />
        </SubBtnWrapper>
    );
};

// Step6: 대기 번호 받기
const Step6 = () => {
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

const StepComponent: React.FC = () => {
    const {step} = useParams<{ step: string }>();
    const stepName = SCENE2_STEP_NAME[Number(step) - 1];

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

export default function NotRegistered() {
    return (
        <Wrapper>
            <MainHeader />
            <Container>
                <StepComponent />
            </Container>
        </Wrapper>
    );
}