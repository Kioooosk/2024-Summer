import styled from 'styled-components';

interface NameFieldProps {
  name: string;
  setName: (name: string) => void;
}

const StyledInput = styled.input`
  font-size: 20px;
  padding: 10px;
  width: 80%;
  box-sizing: border-box;

  &::placeholder {
    font-family: Suite, sans-serif;
    font-size: 18px;
    color: #888;
  }
`;

const NameField: React.FC<NameFieldProps> = ({ name, setName }) => {
  return (
    <StyledInput
      type="text"
      placeholder="이름을 입력하세요"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default NameField;
