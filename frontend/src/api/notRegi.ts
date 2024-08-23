import axios from 'axios';

const Server = 'http://43.202.54.214:8080';

export const Waiting = async () => {
    const response = await axios.get(`${Server}/waiting/count`);
    return response.data;
};

export const SubmitRegi = async (data: { name: string, phone: string, ssn: string, department: string }) => {
    const response = await axios.post(`${Server}/registration`, data);
    return response.data;
};