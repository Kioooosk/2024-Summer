import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StepStyles.css';

function StepOneTwo() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/scene1-3');
    };

    return (
        <div className="container">
            <h1 className="header">두 번째 단계, 전화번호 입력하기</h1>
            <div className="tip">
                화면에 보이는 숫자를 차근차근 하나씩 눌러 확인해주세요!
            </div>
            <div className="action-button-container">
                <button className="action-button primary" onClick={handleNext}>다음</button>
            </div>
        </div>
    );
}

export default StepOneTwo;
