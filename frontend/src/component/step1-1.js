import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StepStyles.css';

function StepOneOne() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/scene1-2');
    };

    return (
        <div className="container">
            <h1 className="header">첫 번째 단계, 전화번호 입력하기</h1>
            <div className="input-container">
                <div className="number-input">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                        <button key={number} className="number-button">{number}</button>
                    ))}
                </div>
                <div className="action-button-container">
                    <button className="action-button">정정</button>
                    <button className="action-button primary" onClick={handleNext}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default StepOneOne;
