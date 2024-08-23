import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { KioskLayout, MainHeader } from '../components/common';
import DetailInfo from '../components/pharmacy/DetailInfo';

export default function DetailInfoPage() {
  const { state } = useLocation();
  const { place_name, address_name, phone, distance } = state || {};

  return (
    <Wrapper>
      <MainHeader />
      <Container>
        <Title>
          두 번째 단계,
          <br />
          약국 정보 확인하기
        </Title>
        <KioskLayout
          contentTitle="약국의 상세 정보를 확인해주세요"
          children={
            <DetailInfo
              placeName={place_name}
              addressName={address_name}
              phone={phone}
              distance={distance}
            />
          }
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 800px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #878787, #15204c);
  align-items: center;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: left;
  color: white;
`;
