import { useCallback, useState } from 'react';
import {
  type CreateMatchForm,
  initialCreateMatchForm,
} from './create-match-form';

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

  return {
    createMatchForm,
    updateMatchInfo,
    updateSchedule,
    updatePayment,
    updateOptions,
    updateLocation,
  };
};
