import styled from 'styled-components';

//공통
export const Wrapper = styled.div`
  height: 800px;
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #878787, #15204c);
  align-items: center;
  height: 100%;
`;

export const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: left;
  color: white;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  bottom: 20px;
`;

interface ActionBtnProps {
  backgroundColor: string;
}

export const ActionBtn = styled.button<ActionBtnProps>`
  width: 124px;
  height: 60px;
  color: #fff;
  border: none;
  font-size: 24px;
  font-family: Suite;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  background-color: ${(props) => props.backgroundColor};
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 15px;
`;

export const InfoBox = styled.div`
  width: 125px;
  height: 56px;
  border: 1px solid #a3a3a3;
  color: #585858;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndButton = styled.button`
  background-color: #5574c1;
  color: #fff;
  font-size: 15px;
  border: 1px solid #787878;
  padding: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ContentTitle = styled.p`
  color: #000;
  text-align: center;
`;

//step3
export const SubBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

//step4
export const PressContainer = styled.button`
  margin-top: 10px;
  background-color: #fff;
  width: 200px;
  height: 70px;
  position: relative;
  border: none;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;

export const LineIconContainer = styled.div`
  position: absolute;
  font-size: 100px;
  top: -25%;
  left: 25%;
`;

//step5
export const CodeImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;