import styled from 'styled-components';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

//흰색 가로 버튼
function SubButton({ text, onClick }: ButtonProps) {
    return <Button onClick={onClick}>{text}</Button>;
}

export default SubButton;

const Button = styled.button`
    background-color: white;
    width: 266px;
    height: 44px;
    border: 2px solid #d0d0d0;
    font-size: 18px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
    color: #091430;
    font-family: Suite;
    &:hover {
        border: 2px solid #3b82f6;
        cursor: pointer;
    }
`;
