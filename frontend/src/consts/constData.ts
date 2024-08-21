//상수 데이터 모음

export const MAIN_CONTENT_LIST = [
  '예약하고 병원에 갔을 때 진료 보기',
  '예약 안하고 병원에 갔을 때 진료 보기',
  '의료 증명서 발급받기',
  '병원 키오스크로 금액 결제하기(수납)',
  '병원 근처 약국 찾아보기',
];

export const SCENE1_STEP_NAME = [
  {
    stepTitle: '첫 번째 단계,',
    stepSubtitle: '전화번호 입력하기',
    stepDescription: '전화번호를 입력해주세요',
    advice: '회원가입 시 입력한 전화번호와 동일하게 해주세요',
  },
  {
    stepTitle: '모두 다',
    stepSubtitle: '완료되었어요 🙇‍♀️',
    stepDescription: '',
    advice: '홈 화면으로 돌아가주세요!',
  },
];

export const SCENE3_STEP_NAME = [
  {
    stepTitle: '첫 번째 단계,',
    stepSubtitle: '이름 입력하기',
    stepDescription: '성함을 입력해주세요',
    advice: '키보드를 이용하여 입력하세요',
  },
  {
    stepTitle: '두 번째 단계,',
    stepSubtitle: '전화번호 입력하기',
    stepDescription: '전화번호를 입력해주세요',
    advice: '회원가입 시 입력한 번호와 같게 해주세요',
  },
  {
    stepTitle: '세 번째 단계,',
    stepSubtitle: '주민번호 입력하기',
    stepDescription: '주민번호를 입력해주세요',
    advice: '타인에게 노출되지 않게 주의하세요',
  },
  {
    stepTitle: '네 번째 단계,',
    stepSubtitle: '진단명 포함 여부 선택',
    stepDescription: '증명서 발급 시\n' +
        '진단명(병명) 포함을 원하시나요?',
    advice: '',
  },
  {
    stepTitle: '다섯 번째 단계,',
    stepSubtitle: '증명서 종류 입력하기',
    stepDescription: '원하시는 의료 증명서의 종류를 선택해주세요',
    advice: '실제로 원하는 증명서가 없다면 직원에게 직접 문의하세요',
  },
  {
    stepTitle: '모두 다',
    stepSubtitle: '완료되었어요',
    stepDescription: '',
    advice: ' ',
  },
];

export const SCENE4_STEP_NAME = [
  {
    stepTitle: '첫 번째 단계,',
    stepSubtitle: '전화번호 입력하기',
    stepDescription: '전화번호를 입력해주세요',
    advice: '진료비 확인을 위해 접수 시 사용한 전화번호를 입력해주세요.',
  },
  {
    stepTitle: '두 번째 단계,',
    stepSubtitle: '수납 내역 조회',
    stepDescription: '수납 금액을 확인해주세요',
    advice:
        '결제를 진행하려면 수납 버튼을, 이전 화면으로 돌아가려면 취소 버튼을 누릅니다.',
  },
  {
    stepTitle: '세 번째 단계,',
    stepSubtitle: '결제 방식 선택',
    stepDescription: '결제 방식을 선택해주세요',
    advice:
        '원하는 결제방식을 선택합니다. 현금 결제를 원할 경우 안내데스크의 직원에게 문의해주세요!',
  },
  {
    stepTitle: '네 번째 단계,',
    stepSubtitle: '결제하기',
    stepDescription: '카드 결제를 진행합니다',
    advice:
        '화살표가 가리키는 부분을 길게 꾹～ 눌러주세요. 실제 키오스크에서는 카드 투입구에 체크카드 또는 신용카드를 ‘딸깍’ 소리가 날 때까지 삽입해주세요.',
  },
  {
    stepTitle: '네 번째 단계,',
    stepSubtitle: '결제하기',
    stepDescription: '간편 결제를 진행합니다',
    advice:
        '버튼을 눌러 결제 코드를 승인합니다. 실제 키오스크에서는 휴대폰에서 간편 결제 앱을 실행해, QR코드 스캔 기능을 이용하세요.',
  },
  {
    stepTitle: '네 번째 단계,',
    stepSubtitle: '결제하기',
    stepDescription: '결제가 완료되었습니다',
    advice: '다른 메뉴 연습을 위해 첫 화면으로 돌아가세요.',
  },
];
