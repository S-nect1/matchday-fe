import { memo, useEffect, useRef } from 'react';

import type { PlaceSearchResult } from '@/widgets';

interface LocationMapProps {
  selectedPlace: PlaceSearchResult | null;
  width?: string;
  height?: string;
}

const LocationMapComponent = ({
  selectedPlace,
  width = '100%',
  height = '250px',
}: LocationMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const selectedPlaceRef = useRef<PlaceSearchResult | null>(selectedPlace);

  useEffect(() => {
    const kakao = (window as any).kakao;
    if (!containerRef.current || !kakao || !kakao.maps) {
      console.warn('카카오맵 API가 로드되지 않았습니다.');
      return;
    }

    const initMap = () => {
      const defaultPos = new kakao.maps.LatLng(37.5665, 126.978);
      mapRef.current = new kakao.maps.Map(containerRef.current, {
        center: defaultPos,
        level: 3,
      });

      const onClick = () => {
        const sp = selectedPlaceRef.current;
        if (!sp) return;
        const url = `https://map.kakao.com/link/map/${encodeURIComponent(sp.place_name)},${sp.y},${sp.x}`;
        window.open(url, '_blank');
      };
      containerRef.current!.addEventListener('click', onClick, {
        passive: true,
      });

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('click', onClick);
        }
        mapRef.current = null;
      };
    };

    if (typeof kakao.maps.load === 'function') kakao.maps.load(initMap);
    else initMap();

    return () => {
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    selectedPlaceRef.current = selectedPlace;
    const kakao = (window as any).kakao;
    if (!mapRef.current || !selectedPlace || !kakao?.maps) return;

    const lat = parseFloat(selectedPlace.y);
    const lng = parseFloat(selectedPlace.x);
    if (Number.isNaN(lat) || Number.isNaN(lng)) return;

    const pos = new kakao.maps.LatLng(lat, lng);
    if (typeof mapRef.current.panTo === 'function') {
      mapRef.current.panTo(pos);
    } else {
      mapRef.current.setCenter(pos);
    }
  }, [selectedPlace]);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        cursor: 'pointer',
      }}
      className="overflow-hidden rounded-[5px]"
    />
  );
};

// React.memo 적용
export const LocationMap = memo(LocationMapComponent);
