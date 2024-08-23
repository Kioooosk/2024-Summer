import React from 'react';

export const Step2: React.FC = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    return (
        <div>
            <p style={{ fontSize: '20px', margin: '0' }}>환자분의 대기 순번은</p>
            <h1 style={{ fontSize: '80px' }}>{randomNumber}번</h1>
            <br /><br />
            <p style={{ fontSize: '18px', margin: '0' }}>진료실로 들어가실 때 <br />성함을 불러드립니다 ✨</p>
        </div>
    );
};
