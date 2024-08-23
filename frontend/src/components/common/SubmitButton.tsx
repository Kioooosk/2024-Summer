import React from 'react';
import styled from 'styled-components';

interface YesNoButtonProps {
    onSubmit: () => void;
    onNo: () => void;
}

const SubmitButton: React.FC<YesNoButtonProps> = ({ onSubmit, onNo }) => {
    return (
        <ButtonContainer>
            <ActionButton color="#0275d8" onClick={onSubmit}>접수하기</ActionButton>  {/* 파란색 버튼 */}
            <ActionButton color="#d9534f" onClick={onNo}>취소하기</ActionButton> {/* 빨간색 버튼 */}
        </ButtonContainer>
    );
};

export default SubmitButton;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const ActionButton = styled.button<{ color: string }>`
    width: 100px;
    height: 60px;
    background-color: ${({ color }) => color};
    border: none;
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    font-family: 'Suite', sans-serif;

    &:active {
        opacity: 0.8;
    }
`;