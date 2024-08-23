// Step4: 진단명 포함 여부 선택
import { useNavigate } from 'react-router-dom';
import YesNoButton from '../common/YesNoButton';

export function Step4() {
  const navigate = useNavigate();

  const handleInclude = (includeDiagnosis: boolean) => {
    if (includeDiagnosis) {
      console.log('진단명을 포함합니다.');
    } else {
      console.log('진단명을 포함하지 않습니다.');
    }
    navigate('/certificate/5'); // 다음 스텝으로 이동
  };

  return (
    <div>
      <p style={{ fontSize: '20px' }}>진단명을 포함하시겠습니까?</p>
      <YesNoButton
        onYes={() => handleInclude(true)}
        onNo={() => handleInclude(false)}
      />
    </div>
  );
}
