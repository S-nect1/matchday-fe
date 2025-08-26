import React, { useCallback } from 'react';

import { useMatchSearchFilters } from '../../model'; // 동일 슬라이스 내 import 이므로 상대경로 사용

import { FilterMatchesHeader } from './FilterMatchesHeader';
import { FilterMatchesType } from './FilterMatchesType';
import { FilterMatchesLocationTime } from './FilterMatchesLocationTime';
import { FilterMatchesAboutTeam } from './FilterMatchesAboutTeam';
import { FilterMatchesAction } from './FilterMatchesAction';

import { FilterModal } from '@/widgets';

type Props = {
  searchText: string;
  setSearchText: (value: string) => void;
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterMatches = ({
  searchText,
  setSearchText,
  onChangeSearchText,
}: Props) => {
  const {
    filters,
    updateMatchType,
    updateLocation,
    updateSchedule,
    updateAge,
    updateGender,
    updateTeamAbility,
    resetFilters,
  } = useMatchSearchFilters();

  const handleReset = useCallback(() => {
    setSearchText('');
    resetFilters();
  }, [setSearchText, resetFilters]);

  const handleApplyFilter = () => {
    console.log('필터 적용:', { searchText, filters });
  };

  return (
    <FilterModal
      title="매치 검색"
      dialogContent={
        <div className="flex h-full flex-col gap-0">
          <FilterMatchesHeader
            searchText={searchText}
            onChangeSearchText={onChangeSearchText}
          />

          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-[15px] py-[15px]">
              <FilterMatchesType
                matchType={filters.matchType}
                onUpdateMatchType={updateMatchType}
              />

              <FilterMatchesLocationTime
                location={filters.location}
                schedule={filters.schedule}
                onUpdateLocation={updateLocation}
                onUpdateSchedule={updateSchedule}
              />

              <FilterMatchesAboutTeam
                teamAbility={filters.teamAbility}
                age={filters.age}
                gender={filters.gender}
                onUpdateTeamAbility={updateTeamAbility}
                onUpdateAge={updateAge}
                onUpdateGender={updateGender}
              />
            </div>
          </div>

          <div className="border-t border-gray-100 bg-white pt-[15px]">
            <FilterMatchesAction
              onReset={handleReset}
              onApplyFilter={handleApplyFilter}
            />
          </div>
        </div>
      }
    />
  );
};
