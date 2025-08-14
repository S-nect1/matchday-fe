// src/pages/home/ui/SearchMatchModal/useSearchFilters.ts
import { useState, useCallback } from 'react';

import {
  type MatchSearchFilters,
  initialSearchFilters,
} from './match-search-filters';

export const useMatchSearchFilters = () => {
  const [filters, setFilters] =
    useState<MatchSearchFilters>(initialSearchFilters);

  // 섹션별 업데이트 함수들
  const updateMatchType = useCallback(
    (updates: Partial<MatchSearchFilters['matchType']>) => {
      setFilters(prev => ({
        ...prev,
        matchType: { ...prev.matchType, ...updates },
      }));
    },
    []
  );

  const updateLocation = useCallback(
    (updates: Partial<MatchSearchFilters['location']>) => {
      setFilters(prev => ({
        ...prev,
        location: { ...prev.location, ...updates },
      }));
    },
    []
  );

  const updateSchedule = useCallback(
    (updates: Partial<MatchSearchFilters['schedule']>) => {
      setFilters(prev => ({
        ...prev,
        schedule: { ...prev.schedule, ...updates },
      }));
    },
    []
  );

  const updateAge = useCallback(
    (updates: Partial<MatchSearchFilters['age']>) => {
      setFilters(prev => ({
        ...prev,
        age: { ...prev.age, ...updates },
      }));
    },
    []
  );

  const updateGender = useCallback(
    (updates: Partial<MatchSearchFilters['gender']>) => {
      setFilters(prev => ({
        ...prev,
        gender: { ...prev.gender, ...updates },
      }));
    },
    []
  );

  const updateTeamAbility = useCallback(
    (updates: Partial<MatchSearchFilters['teamAbility']>) => {
      setFilters(prev => ({
        ...prev,
        teamAbility: { ...prev.teamAbility, ...updates },
      }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    setFilters(initialSearchFilters);
  }, []);

  return {
    filters,
    updateMatchType,
    updateLocation,
    updateSchedule,
    updateAge,
    updateGender,
    updateTeamAbility,
    resetFilters,
  };
};
