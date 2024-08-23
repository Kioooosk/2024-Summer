import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubButton } from '../common';
import { SubBtnWrapper } from '../../styles/notregistered/NotRegisteredStyle';

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

export default Step5;