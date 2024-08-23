import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleConfirm = () => {
        if (name.trim().length > 0) {
            setErrorMessage('');
            navigate('/notregistered/3'); 
        } else {
            setErrorMessage('이름을 입력해주세요.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontSize: '20px', padding: '10px', width: '80%' }}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button onClick={handleConfirm} style={{ marginTop: '20px' }}>
                확인
            </button>
        </div>
    );
};

export default Step2;