import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmButton from './ConfirmButton';
import NameField from './NameField';

// Step1: 이름 입력 (키보드를 사용)
export function Step1() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleConfirm = () => {
        if (name.trim().length > 0) {
            navigate('/certificate/2'); // 다음 스텝으로 이동
        } else {
            alert('이름을 입력해주세요.');
        }
    };

    return (
      <div>
          {/* name과 setName을 NameField에 전달 */}
          <NameField name={name} setName={setName} />
          <div>
              <h1> </h1>
              <ConfirmButton onConfirm={handleConfirm} />
          </div>
      </div>
    );
}
