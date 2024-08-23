import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Step1: 이름 입력 (키보드를 사용)
export function Step1() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleConfirm = () => {
        if (name.trim().length > 0) {
            console.log('입력된 이름:', name);
            navigate('/certificate/2'); // 다음 스텝으로 이동
        } else {
            alert('이름을 입력해주세요.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontSize: '20px', padding: '10px', width: '100%' }}
            />
            <button onClick={handleConfirm} style={{ marginTop: '20px' }}>
                확인
            </button>
        </div>
    );
}