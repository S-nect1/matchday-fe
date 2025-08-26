import { useCallback, useState } from 'react';

import type { PlaceSearchResult } from '@/widgets';

import {
  type CreateMatchForm,
  initialCreateMatchForm,
} from './create-match-form';
import { CreateMatchFormSchema } from './match-form-validation';
import { toast } from 'sonner';

export const useCreateMatchForm = () => {
  const [createMatchForm, setCreateMatchForm] = useState<CreateMatchForm>(
    initialCreateMatchForm
  );

  // 섹션별 업데이트
  const updateMatchType = useCallback(
    (updates: Partial<CreateMatchForm['matchType']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        matchType: { ...prev.matchType, ...updates },
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

  const updateLocation = useCallback(
    (updates: Partial<CreateMatchForm['location']>) => {
      setCreateMatchForm(prev => ({
        ...prev,
        location: { ...prev.location, ...updates },
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

  const updateAgreement = useCallback(() => {
    setCreateMatchForm(prev => ({
      ...prev,
      isAgreedToNoShowTerms: !prev.isAgreedToNoShowTerms,
    }));
  }, []);

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

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const parsed = CreateMatchFormSchema.safeParse(createMatchForm);
      if (parsed.success) {
        console.log(parsed.data);
      } else {
        toast('모든 항목을 입력해야 합니다.');
      }
    },
    [createMatchForm]
  );

  const handlePlaceSearchOpen = useCallback(() => {
    updateLocation({ isPlaceSearchOpen: true });
  }, [updateLocation]);

  const handlePlaceSearchClose = useCallback(() => {
    updateLocation({ isPlaceSearchOpen: false });
  }, [updateLocation]);

  return {
    createMatchForm,
    updateMatchType,
    updateSchedule,
    updateLocation,
    updatePayment,
    updateOptions,
    updateAgreement,
    handlePlaceSelect,
    handleSubmit,
    handlePlaceSearchOpen,
    handlePlaceSearchClose,
  };
};
