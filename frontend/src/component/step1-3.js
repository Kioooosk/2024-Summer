import React from 'react';
import './StepStyles.css';

function StepOneThree() {
    return (
        <div className="container">
            {/* 최상단 진회색 박스 */}
            <div className="top-bar">
                병원 키오스크 연습용 웹, 홀로서기
            </div>

            {/* 키오스크 모양 구조 */}
            <div className="kiosk-wrapper">
                <div className="kiosk-base">
                    <div className="kiosk">
                        <div className="kiosk-screen">

                            <div className="sub-header">외래 도착 알림 전용 키오스크</div>
                            <div className="queue-display">
                                OO 환자분의 대기 순번은 <br/>
                                <strong className="queue-number">3번</strong>
                            </div>
                            <div className="footer">진료실로 들어가실 때 이름을 불러드립니다!</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단의 '시작 화면으로 돌아가기' 텍스트 */}
            <div className="start-over">
                시작 화면으로 돌아가기
            </div>
        </div>
    );
}

export default StepOneThree;
