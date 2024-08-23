import React from 'react';
import { useNavigate } from 'react-router-dom';
import { KeypadLayout } from '../common';

const Step3: React.FC = () => {
    const navigate = useNavigate();

    const handleConfirm = (inputValue: string) => {
        if (/^\d{3}-\d{4}-\d{4}$/.test(inputValue)) {
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

export default Step3;