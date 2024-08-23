import React from 'react';
import styled from 'styled-components';

interface YesNoButtonProps {
    onYes: () => void;
    onNo: () => void;
}

const YesNoButton: React.FC<YesNoButtonProps> = ({ onYes, onNo }) => {
    return (
        <ButtonContainer>
            <ActionButton color="#0275d8" onClick={onYes}>예</ActionButton>  {/* 파란색 버튼 */}
            <ActionButton color="#d9534f" onClick={onNo}>아니요</ActionButton> {/* 빨간색 버튼 */}
        </ButtonContainer>
    );
};

export default YesNoButton;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const ActionButton = styled.button<{ color: string }>`
    width: 80px;
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
