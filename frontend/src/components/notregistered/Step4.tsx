import { useNavigate } from 'react-router-dom';
import { KeypadLayout } from '../common';
import axios from 'axios';

export function Step4() {
  const navigate = useNavigate();
  const id = sessionStorage.getItem('userId');
  const handleConfirm = async (inputValue: string) => {
    if (/^\d{6}-\d{7}$/.test(inputValue)) {
      try {
        const response = await axios.get(
          `http://43.202.54.214:8080/regi_on/ssn/${id}`,
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
    </div>
  );
}