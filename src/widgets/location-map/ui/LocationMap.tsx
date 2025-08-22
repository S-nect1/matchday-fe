import { useEffect, useRef, useState } from 'react';

import type { PlaceSearchResult } from '@/widgets';
import { MARKER_IMAGE_URL, MARKER_IMAGE_SIZE } from '@/shared';

// 카카오맵 API 타입 정의
interface KakaoMap {
  setCenter: (latlng: KakaoLatLng) => void;
}

interface KakaoLatLng {
  getLat: () => number;
  getLng: () => number;
}

interface KakaoMarker {
  setMap: (map: KakaoMap | null) => void;
}

interface KakaoInfoWindow {
  close: () => void;
  open: (map: KakaoMap, marker: KakaoMarker) => void;
  setContent: (content: string) => void;
}

interface KakaoMapEvent {
  addListener: (map: KakaoMap, event: string, callback: () => void) => unknown;
  removeListener: (map: KakaoMap, event: string, listener: unknown) => void;
}

interface KakaoMaps {
  Map: new (
    container: HTMLElement,
    options: Record<string, unknown>
  ) => KakaoMap;
  LatLng: new (lat: number, lng: number) => KakaoLatLng;
  Marker: new (options: Record<string, unknown>) => KakaoMarker;
  MarkerImage: new (
    src: string,
    size: { width: number; height: number }
  ) => object;
  InfoWindow: new (options: Record<string, unknown>) => KakaoInfoWindow;
  event: KakaoMapEvent;
}

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
  const [map, setMap] = useState<KakaoMap | null>(null);
  const markerRef = useRef<KakaoMarker | null>(null);
  const infowindowRef = useRef<KakaoInfoWindow | null>(null);

  // 기본 지도 생성 (컴포넌트 마운트 시 한 번만)
  useEffect(() => {
    if (!mapContainer.current) return;

    // 카카오맵 API가 로드되었는지 확인
    if (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typeof (window as any).kakao === 'undefined' ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typeof (window as any).kakao.maps === 'undefined'
    ) {
      console.warn('카카오맵 API가 로드되지 않았습니다.');
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const kakaoMaps = (window as any).kakao.maps as KakaoMaps;

    // 기본 위치 (서울 시청)
    const defaultPosition = new kakaoMaps.LatLng(37.5665, 126.978);

    const mapOption = {
      center: defaultPosition,
      level: level,
    };

    try {
      const kakaoMap = new kakaoMaps.Map(mapContainer.current, mapOption);
      setMap(kakaoMap);
    } catch (error) {
      console.error('지도 생성 중 오류:', error);
    }
  }, [level]); // level만 dependency로 유지

  // 지도 클릭 이벤트 리스너 관리 (별도 useEffect)
  useEffect(() => {
    if (!map || !onClick) return;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const kakaoMaps = (window as any).kakao.maps as KakaoMaps;

      // 클릭 이벤트 리스너 추가
      const clickListener = kakaoMaps.event.addListener(map, 'click', onClick);

      // cleanup 함수로 이벤트 리스너 제거
      return () => {
        if (clickListener && kakaoMaps.event) {
          kakaoMaps.event.removeListener(map, 'click', clickListener);
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const kakaoMaps = (window as any).kakao.maps as KakaoMaps;

      // 새로운 위치로 지도 중심 이동
      const newPosition = new kakaoMaps.LatLng(
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
      const markerIcon = new kakaoMaps.MarkerImage(
        MARKER_IMAGE_URL,
        MARKER_IMAGE_SIZE
      );

      // 새로운 마커 생성
      const newMarker = new kakaoMaps.Marker({
        position: newPosition,
        image: markerIcon,
      });

      newMarker.setMap(map);
      markerRef.current = newMarker;

      // 인포윈도우 생성 (장소명 표시)
      const infowindow = new kakaoMaps.InfoWindow({
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
      className="overflow-hidden rounded-[5px]"
    />
  );
};
