import { Add, Help, Home } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdviceBar from './AdviceBar';
import styled from 'styled-components';

interface FloatingBtnProps {
  advice: string; //도움말 내용
}

function FloatingBtn({ advice }: FloatingBtnProps) {
  const navigate = useNavigate();
  const goHome = () => navigate('/mainpage');

  const [isOpen, setIsOpen] = useState(false);

  const showAdvice = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const actions = [
    {
      icon: <Home />,
      name: 'Go Home',
      tooltip: '첫 화면으로 돌아가기',
      act: goHome,
    },
    {
      icon: <Help />,
      name: 'Help',
      tooltip: '도움말 보기',
      act: showAdvice,
    },
  ];

  return (
    <FloatingBtnWrapper>
      <AdviceBar isOpen={isOpen} advice={advice} onClose={handleClose} />
      <SpeedDial ariaLabel="floating button" icon={<Add />}>
        {actions.map(({ name, icon, tooltip, act }) => (
          <SpeedDialAction
            key={name}
            icon={icon}
            tooltipTitle={tooltip}
            onClick={act}
          />
        ))}
      </SpeedDial>
    </FloatingBtnWrapper>
  );
}

export default FloatingBtn;

export const FloatingBtnWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
