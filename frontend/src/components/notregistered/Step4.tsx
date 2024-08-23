import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KeypadLayout } from '../common';

const Step4: React.FC = () => {
    const navigate = useNavigate();

    const handleConfirm = (inputValue: string) => {
        if (/^\d{6}-\d{7}$/.test(inputValue)) {
            navigate('/notregistered/5');
        } else {
            alert('올바른 주민번호를 입력해주세요.');
        }
    };

    return (
        <div>
            <KeypadLayout onConfirm={handleConfirm} useHyphen={true} /> 
        </div>
    );
};

export default Step4;
