import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { EndButton } from '../../styles/reception/ReceptionStyle';

interface DetailInfoProps {
  placeName: string;
  addressName: string;
  phone: string;
  distance: string;
}

export default function DetailInfo({
  placeName,
  addressName,
  phone,
  distance,
}: DetailInfoProps) {
  const navigate = useNavigate();
  const infoItems = [
    { label: '주소', value: addressName },
    { label: '전화번호', value: phone },
    { label: '거리', value: `${distance}m` },
  ];

  return (
    <DetailContainer>
      <DetailTitle>{placeName}</DetailTitle>
      {infoItems.map((item) => {
        return (
          <InfoWrapper key={item.label}>
            <InfoBoxLabel>{item.label}</InfoBoxLabel>
            <InfoBox>{item.value}</InfoBox>
          </InfoWrapper>
        );
      })}
      <EndButton onClick={() => navigate(-1)}>지도로 돌아가기</EndButton>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const DetailTitle = styled.div`
  font-size: 24px;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 90%;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoBoxLabel = styled.div`
  width: 80px;
  padding: 0 10px;
  height: 56px;
  border: 1px solid #a3a3a3;
  color: #585858;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 180px;
  padding: 0 10px;
  height: 56px;
  border: 1px solid #a3a3a3;
  color: #585858;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
