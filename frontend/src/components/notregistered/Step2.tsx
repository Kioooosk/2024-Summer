import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmButton from '../certificate/ConfirmButton';
import NameField from '../certificate/NameField';
import axios from 'axios';

export function Step2() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const id = sessionStorage.getItem('userId');

  const handleConfirm = async () => {
    if (name.trim().length > 0) {
      try {
        const response = await axios.get(
          `http://43.202.54.214:8080/regi_on/name/${id}`,
          {
            params: {
              name: name,
            },
          }
        );
        if (response.status === 200) {
          navigate('/notregistered/3');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            alert(error.response.data);
          }
        }
      }
    } else {
      alert('이름을 입력해주세요.');
    }
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        marginBottom: '200px' }}
    >
      <NameField name={name} setName={setName} />
      <div style={{ marginTop: '20px' }}>
        <ConfirmButton onConfirm={handleConfirm} />
      </div>
    </div>
  );
}