import axios from 'axios';

// 환자 정보를 나타내는 타입 정의
interface Patient {
    name: string;
    phone: string;
}

// 환자 정보를 가져오는 API 함수
export async function getPatientInfo(id: string, phone: string): Promise<Patient> {
    try {
        const response = await axios.get<Patient>(`/regi_res/${id}`, {
            params: { phone }
        });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;

            if (status === 400) {
                throw new Error('알맞지 않은 형식의 데이터를 기입하였습니다.');
            } else if (status === 404) {
                throw new Error(`해당 아이디 ${id}는 존재하지 않습니다.`);
            } else if (status === 500) {
                throw new Error('500 internal Server Error');
            }
        }
        throw error;
    }
}