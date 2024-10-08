import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPatientInfo } from '../../api/getPhoneNum';
import KeypadLayout from '../common/KeypadLayout';
import axios from 'axios';

export function Step1() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState<string | null>(null);

  // 컴포넌트가 마운트될 때 세션에서 patientId를 가져옴
  // useEffect(() => {
  //   const fetchSessionData = async () => {
  //     try {
  //       const response = await fetch('/api/session'); // 서버에서 세션 데이터를 가져오는 엔드포인트
  //       const data = await response.json();
  //       setPatientId(data.id); // 세션에서 id를 가져와서 상태로 저장
  //     } catch (error) {
  //       console.error('세션 데이터를 가져오지 못했습니다:', error);
  //     }
  //   };

  //   fetchSessionData();
  // }, []);

  const id = sessionStorage.getItem('userId');

  const handleConfirm = async (inputValue: string) => {
    if (inputValue.length === 13) {
      // 전화번호가 올바른 형식(3-4-4, 총 13자)인지 확인
      try {
        const response = await axios.get(
          `http://43.202.54.214:8080/regi_res/${id}`,
          {
            params: {
              phone: inputValue,
            },
          }
        );
        if (response.status === 200) {
          navigate('/registered/2'); // 전화번호 일치 -> 다음 스텝으로 이동
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            alert(error.response.data.error);
          }
        }
      }
    } else {
      alert('올바른 전화번호를 입력해주세요.');
    }
  };

  return (
    <div>
      <KeypadLayout onConfirm={handleConfirm} useHyphen={true} />{' '}
      {/* useHyphen true 설정 */}
    </div>
  );
}
