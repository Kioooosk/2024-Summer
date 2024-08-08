import React from 'react';
import './StepStyles.css';

function StepOneThree() {
    return (
        <div className="container">
            <div className="header-container">
                <h1 className="header">모두 다 완료되었어요 :)</h1>
            </div>
            <div className="sub-header">외래 도착 알림 전용 키오스크</div>
            <div className="queue-display">
                OO 환자분의 대기 순번은 <br />
                <strong className="queue-number">3번</strong>
            </div>
            <div className="footer">진료실로 들어가실 때 이름을 불러드립니다!</div>
            <div className="start-over">
                시작 화면으로 돌아가기
            </div>
        </div>
    );
}

export default StepOneThree;
