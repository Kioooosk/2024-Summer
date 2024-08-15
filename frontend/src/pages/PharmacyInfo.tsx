import { useParams } from 'react-router-dom';

export default function PharmacyInfo() {
  const id = useParams();
  console.log(id);
  return <h1>상세페이지</h1>;
}
