import ButtonList from '../components/btn-list';
import MainButton from '../components/btn-main';
import Header from '../components/header';

const mainContentList = [
  '예약하고 병원에 갔을 때 진료 보기',
  '예약 안하고 병원에 갔을 때 진료 보기',
  '의료 증명서 발급받기',
  '병원 키오스크로 금액 결제하기(수납)',
  '병원 근처 약국 찾아보기',
];

export default function MainPage() {
  return (
    <div className="h-[50rem] overflow-hidden">
      <Header />
      <div className="container items-center h-full">
        <p className="my-10 text-2xl text-left text-white">
          김OO님, <br /> 무엇을 연습해볼까요?
        </p>
        <ButtonList contentList={mainContentList} />
        <div className="relative h-[14rem]">
          <div className="absolute bottom-0 w-full text-center text-white">
            @Team eldkiz
          </div>
          <img src="images/main-image.png" />
        </div>
      </div>
    </div>
  );
}
