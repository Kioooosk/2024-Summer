import { useNavigate } from 'react-router-dom';
import KeypadLayout from '../common/KeypadLayout';

export function Step1() {
    const navigate = useNavigate();

    const handleConfirm = (inputValue: string) => {
        if (inputValue.length === 13) {
            // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
            console.log('입력된 전화번호:', inputValue);
            navigate('/registered/2'); // 다음 스텝으로 이동
        } else {
            alert('올바른 전화번호를 입력해주세요.');
        }
    };

    return (
        <div>
            <KeypadLayout onConfirm={handleConfirm} /> {/* onConfirm prop을 전달 */}
        </div>
    );
}

