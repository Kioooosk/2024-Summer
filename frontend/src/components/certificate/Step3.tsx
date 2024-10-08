import { useNavigate } from 'react-router-dom';
import { KeypadLayout } from '../common';
import axios from 'axios';

// Step3: 주민번호 입력 (KeypadLayout 사용)
export function Step3() {
  const navigate = useNavigate();
  const id = sessionStorage.getItem('userId');
  const handleConfirm = async (inputValue: string) => {
    if (/^\d{6}-\d{7}$/.test(inputValue)) {
      // 주민번호가 올바른 형식(6-7, 총 14자)인지 확인
      try {
        const response = await axios.get(
          `http://43.202.54.214:8080/certification/ssn/${id}`,
          {
            params: {
              ssn: inputValue,
            },
          }
        );
        if (response.status === 200) {
          navigate('/certificate/4');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            alert(error.response.data);
          }
        }
      }
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
