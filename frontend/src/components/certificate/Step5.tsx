import SubButton from '../common/SubButton';
import { SubBtnWrapper } from '../../styles/reception/ReceptionStyle';
import {useNavigate} from "react-router-dom";

// Step5: 증명서 종류 선택

export function Step5() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/certificate/6');
    };

    return (
        <SubBtnWrapper>
            <SubButton text="소견서" onClick={handleClick} />
            <SubButton text="진단서" onClick={handleClick} />
            <SubButton text="진료비 영수증" onClick={handleClick} />
            <SubButton text="수술 확인서" onClick={handleClick} />
            <SubButton text="입·퇴원 확인서" onClick={handleClick} />
        </SubBtnWrapper>
    );
}