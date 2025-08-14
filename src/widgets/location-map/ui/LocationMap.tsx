import { useEffect, useRef, useState } from 'react';

import {
  MARKER_IMAGE_URL,
  MARKER_IMAGE_SIZE,
} from '@/shared/constant/marker-image';

import type { PlaceSearchResult } from '@/widgets';

interface LocationMapProps {
  selectedPlace: PlaceSearchResult | null;
  width?: string;
  height?: string;
  level?: number;
  // onClick 함수는 부모 컴포넌트에서 useCallback으로 래핑하여 전달해주세요
  onClick?: () => void;
}

export const LocationMap = ({
  selectedPlace,
  width = '100%',
  height = '250px',
  level = 3,
  onClick,
}: LocationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const markerRef = useRef<any>(null);
  const infowindowRef = useRef<any>(null);

  // 기본 지도 생성 (컴포넌트 마운트 시 한 번만)
  useEffect(() => {
    if (!mapContainer.current) return;

    // 카카오맵 API가 로드되었는지 확인
    if (
      typeof (window as any).kakao === 'undefined' ||
      typeof (window as any).kakao.maps === 'undefined'
    ) {
      console.warn('카카오맵 API가 로드되지 않았습니다.');
      return;
    }

    // 기본 위치 (서울 시청)
    const defaultPosition = new (window as any).kakao.maps.LatLng(
      37.5665,
      126.978
    );

    const mapOption = {
      center: defaultPosition,
      level: level,
    };

    try {
      const kakaoMap = new (window as any).kakao.maps.Map(
        mapContainer.current,
        mapOption
      );
      setMap(kakaoMap);
    } catch (error) {
      console.error('지도 생성 중 오류:', error);
    }
  }, [level]); // level만 dependency로 유지

  // 지도 클릭 이벤트 리스너 관리 (별도 useEffect)
  useEffect(() => {
    if (!map || !onClick) return;

    try {
      // 클릭 이벤트 리스너 추가
      const clickListener = (window as any).kakao.maps.event.addListener(
        map,
        'click',
        onClick
      );

      // cleanup 함수로 이벤트 리스너 제거
      return () => {
        if (clickListener && (window as any).kakao?.maps?.event) {
          (window as any).kakao.maps.event.removeListener(
            map,
            'click',
            clickListener
          );
        }
      };
    } catch (error) {
      console.error('지도 클릭 이벤트 설정 중 오류:', error);
    }
  }, [map, onClick]);

  // 선택된 장소가 변경될 때 지도 업데이트
  useEffect(() => {
    if (!map || !selectedPlace) return;

    try {
      // 새로운 위치로 지도 중심 이동
      const newPosition = new (window as any).kakao.maps.LatLng(
        parseFloat(selectedPlace.y),
        parseFloat(selectedPlace.x)
      );

      map.setCenter(newPosition);

      // 기존 인포윈도우 닫기
      if (infowindowRef.current) {
        infowindowRef.current.close();
      }

      // 기존 마커 제거
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      // MatchDay 마커 아이콘 설정
      const markerIcon = new (window as any).kakao.maps.MarkerImage(
        MARKER_IMAGE_URL,
        MARKER_IMAGE_SIZE
      );

      // 새로운 마커 생성
      const newMarker = new (window as any).kakao.maps.Marker({
        position: newPosition,
        image: markerIcon,
      });

      newMarker.setMap(map);
      markerRef.current = newMarker;

      // 인포윈도우 생성 (장소명 표시)
      const infowindow = new (window as any).kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;white-space:nowrap;">${selectedPlace.place_name}</div>`,
      });

      // 마커에 인포윈도우 표시
      infowindow.open(map, newMarker);
      infowindowRef.current = infowindow;

      // 지도 업데이트 완료
    } catch (error) {
      console.error('지도 업데이트 중 오류:', error);
    }
  }, [map, selectedPlace]);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return () => {
      if (infowindowRef.current) {
        infowindowRef.current.close();
      }
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width,
        height,
        cursor: onClick ? 'pointer' : 'default',
      }}
      className="overflow-hidden"
    />
  );
};
