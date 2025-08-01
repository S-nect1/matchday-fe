import React from 'react';

import { FilterModal } from '@/widgets';
import { useMatchSearchFilters } from '../../model'; // 동일 슬라이스 내 import 이므로 상대경로 사용

import { FilterMatchesHeader } from './FilterMatchesHeader';
import { FilterMatchesType } from './FilterMatchesType';
import { FilterMatchesLocationTime } from './FilterMatchesLocationTime';
import { FilterMatchesAboutTeam } from './FilterMatchesAboutTeam';
import { FilterMatchesAction } from './FilterMatchesAction';

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

  const handleReset = () => {
    setSearchText('');
    resetFilters();
  };

  const handleApplyFilter = () => {
    console.log('필터 적용:', { searchText, filters });
  };

  return (
    <FilterModal
      title="매치 검색"
      dialogContent={
        <div className="flex flex-col gap-[15px]">
          <FilterMatchesHeader
            searchText={searchText}
            onChangeSearchText={onChangeSearchText}
          />

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

          <FilterMatchesAction
            onReset={handleReset}
            onApplyFilter={handleApplyFilter}
          />
        </div>
      }
    />
  );
};
