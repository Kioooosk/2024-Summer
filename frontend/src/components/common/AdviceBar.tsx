//도움말 띄울 스낵바
import { Button, Snackbar } from '@mui/material';
import styled from 'styled-components';

interface AdviceBarProps {
  advice: string; //도움말 내용
  isOpen: boolean;
  onClose: () => void; // 닫기 버튼 클릭 시 호출될 함수
}

function AdviceBar({ advice, isOpen, onClose }: AdviceBarProps) {
  const closeBtn = (
    <Button onClick={onClose} color="primary" size="large">
      <SnackBarText>닫기</SnackBarText>
    </Button>
  );

  return (
      <Snackbar
          open={isOpen}
          message={<SnackBarText>{advice}</SnackBarText>}
          action={closeBtn}
          onClose={onClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          ContentProps={{ sx: { maxWidth: '360px' } }}
      />
  );
}

export default AdviceBar;

const SnackBarText = styled.div`
  font-size: 18px;
  font-family: 'Suite';
`;