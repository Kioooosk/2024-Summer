import { ReactNode } from 'react';
import styled from 'styled-components';

/*
배경 깔고, 헤더 넣고, 타이틀 넣고 그 아래에 사용
*/

interface KioskLayoutProps {
    contentTitle: string;
    children: ReactNode;
}

function KioskLayout({ contentTitle, children }: KioskLayoutProps) {
    return (
        <KioskWrapper>
            <ContentWrapper>
                <ContentTitle>{contentTitle}</ContentTitle>
                {/* 이 아래로 키오스크에 들어갈 내용들~~ */}
                {children}
            </ContentWrapper>
        </KioskWrapper>
    );
}

export default KioskLayout;

const KioskWrapper = styled.div`
    width: 335px;
    height: 670px;
    background-color: rgba(27, 31, 38, 0.72);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
`;
const ContentWrapper = styled.div`
    margin-top: 10px;
    width: 311px;
    height: 383px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const ContentTitle = styled.p`
  color: #000;
  text-align: center;
`;