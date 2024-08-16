import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao }: any = window;

export default function KakaoMap() {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const curImageSrc = '/images/currMarker.png'; // 현재위치마커 이미지경로
  const pharImageSrc = '/images/pharMarker.png'; // 약국위치마커 이미지경로
  const imageSize = new kakao.maps.Size(35, 35); // 마커 이미지의 크기

  const [curLoc, setCurLoc] = useState(
    new kakao.maps.LatLng(33.450701, 126.570667)
  );

  const [map, setMap] = useState<any>();

  function makeOverlayContent({
    placeName,
    id,
  }: {
    placeName: string;
    id: string;
  }) {
    const nextUrl = `/pharmacy/2/${id}`; //동적 url로 각 위치마다 해당id 페이지로 이동할 수 있게

    return `
      <div style="
          padding: 10px;
          background-color: white;
          border: 1px solid black;
          border-radius: 5px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        ">
          <div>${placeName}</div>
          <button id="detailButton-${id}" style="
            margin-top: 5px;
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            z-index: 3;
          ">
            자세히 보기
          </button>
        </div>
    `;
  }

  useEffect(() => {
    if (mapRef.current) {
      const container = mapRef.current; // 지도를 표시할 div
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

      const initMap = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      setMap(initMap); // state에 map 객체 저장
    }
  }, []);

  const [isPolyline, setIsPolyline] = useState(false);

  //커스텀 오버레이 - 각 마커에 마우스오버하면 장소 이름을 띄움
  const overlay = new kakao.maps.CustomOverlay({
    position: new kakao.maps.LatLng(33.450701, 126.570667), //초기위치
    yAnchor: 1.3,
    clickable: true,
  });

  //직선경로를 잇는 선
  const polyline = new kakao.maps.Polyline({
    strokeColor: '#FF0000',
    strokeWeight: 3,
  });

  //응답 받아오면 호출할 함수
  function searchCallback(result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      result.forEach((loc: any) => {
        //각 응답의 x, y위치를 가져와 마커로 표시
        const locX = loc.x;
        const locY = loc.y;
        const markerLoc = new kakao.maps.LatLng(locY, locX); //로케이션 세팅
        const marker = new kakao.maps.Marker({
          //각 위치의 마커 객체
          map: map,
          position: markerLoc,
          image: new kakao.maps.MarkerImage(pharImageSrc, imageSize),
          clickable: true,
        });
        marker.setMap(map); //맵에 마커 추가

        //각 마커에 마우스 이벤트 추가(오버레이 보이기/숨기기)
        kakao.maps.event.addListener(marker, 'mouseover', function () {
          const newContent = makeOverlayContent({
            placeName: loc.place_name,
            id: loc.id,
          });
          overlay.setPosition(markerLoc);
          overlay.setContent(newContent);
          overlay.setMap(map);

          //오버레이 버튼 이벤트 추가
          const detailButton = document.getElementById(
            `detailButton-${loc.id}`
          );
          if (detailButton) {
            detailButton.addEventListener('click', () => {
              navigate(`/pharmacy/2/${loc.id}`, {
                state: {
                  place_name: loc.place_name,
                  address_name: loc.address_name,
                  phone: loc.phone,
                  distance: loc.distance,
                },
              });
            });
          }
        });
        //마우스 치워도 창이 바로 사라지지 않게 타이머 설정
        kakao.maps.event.addListener(marker, 'mouseout', function () {
          setTimeout(() => {
            overlay.setMap(null);
          }, 1000);
        });

        //각 마커에 클릭 이벤트 추가(클릭 시 현재위치로부터 경로 보이기/숨기기)
        kakao.maps.event.addListener(marker, 'click', function () {
          if (!isPolyline) {
            const path = [curLoc, markerLoc];
            polyline.setMap(map);
            polyline.setPath(path);
          } else {
            polyline.setMap(null);
          }
          setIsPolyline(!isPolyline);
        });
      });
    }
  }

  useEffect(() => {
    if (map) {
      //현재 위치 받아오기
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const locPosition = new kakao.maps.LatLng(lat, lon);
          setCurLoc(locPosition); //현재위치를 변수에 세팅(다른 함수에서 사용)
          map.setCenter(locPosition); //현재위치 받아서 지도의 중심으로 설정

          //현재위치 마커 객체
          const curMarker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: new kakao.maps.MarkerImage(curImageSrc, imageSize),
          });
          curMarker.setMap(map); //현재위치 마커 세팅

          //현재위치에 마우스 올리면 오버레이 띄우기 이벤트 세팅
          kakao.maps.event.addListener(curMarker, 'mouseover', function () {
            overlay.setContent(`<div style="
            padding: 10px;
            background-color: white;
            border: 1px solid black;
            border-radius: 5px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          ">현재 위치</div>`);
            overlay.setPosition(locPosition);
            overlay.setMap(map);
          });
          kakao.maps.event.addListener(curMarker, 'mouseout', function () {
            overlay.setMap(null);
          });
        });
      }
    }
  }, [map]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places(); //키워드서치를 위한 place 라이브러리 사용
    ps.keywordSearch('약국', searchCallback, { location: curLoc }); //현재위치 기준으로 '약국'검색
  }, [curLoc]);

  return (
    <MapWrapper>
      <MapContainer ref={mapRef}></MapContainer>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  width: 90%;
  height: 80%;
`;
