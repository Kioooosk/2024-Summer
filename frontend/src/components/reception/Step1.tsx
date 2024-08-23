import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { KeypadLayout } from '../common';

export function Step1() {
  const navigate = useNavigate();
  const id = '123'; //임시값, 스토리지 사용 확정되면 바꿀것
  const id = sessionStorage.getItem('id');

  const handleConfirm = async (inputValue: string) => {
    if (inputValue.length === 13) {
      // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
      try {
        const response = await axios.get(
          `http://43.202.54.214:8080/reception/${id}`,
          {
            params: {
              phone: inputValue,
            },
          }
        );
        if (response.status === 200) {
          navigate('/reception/2'); // 전화번호 일치 -> 다음 스텝으로 이동
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            alert(error.response.data);
          }
        }
      }
    } else {
      alert('올바른 전화번호를 입력해주세요.');
    }
    navigate('/reception/2');
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} />{' '}
      {/* onConfirm prop을 전달 */}
    </div>
  );
}
