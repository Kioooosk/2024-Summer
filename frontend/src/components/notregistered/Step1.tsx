import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from '../common';

const Step1: React.FC = () => {
    const navigate = useNavigate();
    const randomNumber = Math.floor(Math.random() * 10) + 1; 

    const handleInclude = (includeDiagnosis: boolean) => {
        if (includeDiagnosis) {
            navigate('/notregistered/2'); 
        } else {
            navigate('/notregistered/1');
        }
    };

    return (
        <div>
            <p style={{ fontSize: '20px', margin: '0', textAlign: 'center' }}>환자분의 대기 인원수는</p>
            <p style={{ fontSize: '80px', textAlign: 'center' }}>{randomNumber}</p>
            <br />
            <p style={{ fontSize: '18px', margin: '0' }}>접수하시려면 아래 버튼을 눌러주세요</p>
            <br />
            <SubmitButton onSubmit={() => handleInclude(true)} onNo={() => handleInclude(false)} />
        </div>
    );
};

export default Step1;
