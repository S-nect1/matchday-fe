import { useCallback, useState } from 'react';
import {
  type CreateMatchForm,
  initialCreateMatchForm,
} from './create-match-form';
import type { PlaceSearchResult } from '@/widgets';

export const useCreateMatchForm = () => {
  const [createMatchForm, setCreateMatchForm] = useState<CreateMatchForm>(
    initialCreateMatchForm
  );

  // 섹션별 업데이트
  const updateMatchInfo = useCallback(
    (updates: Partial<CreateMatchForm['matchInfo']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        matchInfo: { ...prev.matchInfo, ...updates },
      }));
    },
    []
  );

  const updateSchedule = useCallback(
    (updates: Partial<CreateMatchForm['schedule']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        schedule: { ...prev.schedule, ...updates },
      }));
    },
    []
  );

  const updatePayment = useCallback(
    (updates: Partial<CreateMatchForm['payment']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        payment: { ...prev.payment, ...updates },
      }));
    },
    []
  );

  const updateOptions = useCallback(
    (updates: Partial<CreateMatchForm['options']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        options: { ...prev.options, ...updates },
      }));
    },
    []
  );

  const updateLocation = useCallback(
    (updates: Partial<CreateMatchForm['location']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        location: { ...prev.location, ...updates },
      }));
    },
    []
  );

  const handlePlaceSelect = useCallback(
    (place: PlaceSearchResult) => {
      updateLocation({ selectedPlace: place });

      // 좌표를 주소로 변환하여 우편번호 추출
      const geocoder = new (window as any).kakao.maps.services.Geocoder();

      geocoder.coord2Address(
        parseFloat(place.x),
        parseFloat(place.y),
        (result: any, status: any) => {
          if (status === (window as any).kakao.maps.services.Status.OK) {
            const addressInfo = result[0];
            updateLocation({
              zipCode:
                addressInfo.road_address?.zone_no ||
                addressInfo.address?.zip_code ||
                '',
            });
          }
        }
      );

      console.log('선택된 장소:', place);
    },
    [updateLocation]
  );

  const handleMapClick = useCallback(() => {
    const { selectedPlace } = createMatchForm.location;
    if (selectedPlace) {
      const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(selectedPlace.place_name)},${selectedPlace.y},${selectedPlace.x}`;
      window.open(kakaoMapUrl, '_blank');
    }
  }, [createMatchForm.location.selectedPlace]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('매치 등록하기. 서버 요청 필요');
  }, []);

  const handlePlaceSearchOpen = useCallback(() => {
    updateLocation({ isPlaceSearchOpen: true });
  }, [updateLocation]);

  const handlePlaceSearchClose = useCallback(() => {
    updateLocation({ isPlaceSearchOpen: false });
  }, [updateLocation]);

  return {
    createMatchForm,
    updateMatchInfo,
    updateSchedule,
    updatePayment,
    updateOptions,
    updateLocation,
    handlePlaceSelect,
    handleMapClick,
    handleSubmit,
    handlePlaceSearchOpen,
    handlePlaceSearchClose,
  };
};
