import { useEffect, useRef, useState } from 'react';
import type { PlaceSearchResult } from '@/widgets/place-search-modal/ui/PlaceSearchModal';

interface LocationMapProps {
  selectedPlace: PlaceSearchResult | null;
  width?: string;
  height?: string;
  level?: number;
  onClick?: () => void;
}

export const LocationMap = ({
  selectedPlace,
  width = '840px',
  height = '600px',
  level = 3,
  onClick,
}: LocationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const markerRef = useRef<any>(null);
  const infowindowRef = useRef<any>(null);

  // 기본 지도 생성 (처음 로드 시)
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

      // 지도 클릭 이벤트 추가
      if (onClick) {
        (window as any).kakao.maps.event.addListener(
          kakaoMap,
          'click',
          onClick
        );
      }
    } catch (error) {
      console.error('지도 생성 중 오류:', error);
    }
  }, [level, onClick]);

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

      // 새로운 마커 생성
      const newMarker = new (window as any).kakao.maps.Marker({
        position: newPosition,
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
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        cursor: onClick ? 'pointer' : 'default',
      }}
      className="overflow-hidden"
    />
  );
};
