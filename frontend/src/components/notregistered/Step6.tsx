import React from 'react';

const Step6: React.FC = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    return (
        <div>
            <p style={{ fontSize: '20px', margin: '0' }}>환자분의 대기 순번은</p>
            <p style={{ fontSize: '80px' }}>{randomNumber}</p>
            <p style={{ fontSize: '18px', margin: '0' }}>진료실로 들어가실 때 <br /> 성함을 불러드립니다✨</p>
        </div>
    );
};

export default Step6;