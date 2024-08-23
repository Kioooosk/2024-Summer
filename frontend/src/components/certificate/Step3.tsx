import { useNavigate } from 'react-router-dom';
import { KeypadLayout } from '../common';

// Step3: 주민번호 입력 (KeypadLayout 사용)
export function Step3() {
  const navigate = useNavigate();

  const handleConfirm = (inputValue: string) => {
    if (/^\d{6}-\d{7}$/.test(inputValue)) {
      // 주민번호가 올바른 형식(6-7, 총 14자)인지 확인
      console.log('입력된 주민번호:', inputValue);
      navigate('/certificate/4'); // 다음 스텝으로 이동
    } else {
      alert('올바른 주민번호를 입력해주세요.');
    }
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} />{' '}
      {/* useHyphen true 설정 */}
    </div>
  );
}
