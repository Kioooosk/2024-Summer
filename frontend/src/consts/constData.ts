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
    advice: 'page1 advice',
  },
  {
    stepTitle: '모두 다',
    stepSubtitle: '완료되었어요 🙇‍♀️',
    stepDescription: '',
    advice: 'page2 advice',
  },
];

export const SCENE2_STEP_NAME = [
  {
    stepTitle: '첫 번째 단계,',
    stepSubtitle: '현재 대기인원 확인하기',
    stepDescription: '',
    advide: 'page1 advice',
  },
  {
    stepTitle: '두 번째 단계,',
    stepSubtitle: '이름 입력하기',
    stepDescription: '성함을 입력해주세요',
    advice: '접수자 성함을 입력해주세요.',
  },
  {
    stepTitle: '세 번째 단계,',
    stepSubtitle: '전화번호 입력하기',
    stepDescription: '전화번호를 입력해주세요',
    advice: '접수자 전화번호를 입력해주세요.',
  },
  {
    stepTitle: '네 번째 단계,',
    stepSubtitle: '주민번호 입력하기',
    stepDescription: '주민번호를 입력해주세요',
    advice: '접수자 주민번호를 입력해주세요.',
  },
  {
    stepTitle: '다섯 번째 단계,',
    stepSubtitle: '진료과 선택하기',
    stepDescription: '원하시는 진료과를 선택해주세요',
    advice: 'page5 advice',
  },
  {
    stepTitle: '모두 다',
    stepSubtitle: '완료되었어요 🙇‍♀️',
    stepDescription: '',
    advice: 'page6 advice',
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

export const SCENE5_STEP_NAME = [
  {
    stepTitle: '첫 번째 단계,',
    stepSubtitle: '원하는 약국 선택하기',
    stepDescription: '방문을 희망하는 약국을 선택해주세요',
    advice: '주변 약국을 찾기 위해 위치 접근을 허용해주세요!',
  },
];