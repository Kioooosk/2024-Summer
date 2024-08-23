import { useNavigate } from 'react-router-dom';
import KeypadLayout from '../common/KeypadLayout';
import { KeypadLayout } from '../common';
export function Step1() {
  const navigate = useNavigate();
  const id = '123'; //임시값, 스토리지 사용 확정되면 바꿀것

  const handleConfirm = async (inputValue: string) => {
    if (inputValue.length === 13) {
      // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
      console.log('입력된 전화번호:', inputValue);

      try {
        const response = await fetch(
          `http://43.203.124.171:8080/reception/${id}?phone=${inputValue}`,
          {
            method: 'GET',
          }
        );
        if (response.status === 200) {
          console.log('성공');
          console.log(response.body);
          navigate('/reception/2'); // 다음 스텝으로 이동
        } else {
          console.log('실패', response.statusText);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('올바른 전화번호를 입력해주세요.');
    }
    navigate('/reception/2');
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} /> {/* onConfirm prop을 전달 */}
    </div>
  );
}
