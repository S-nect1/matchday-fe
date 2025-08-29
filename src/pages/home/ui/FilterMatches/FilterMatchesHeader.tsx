import React from 'react';

import { SearchBar } from '@/widgets';

type FilterMatchesHeaderProps = {
  searchText: string;
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterMatchesHeader = ({
  searchText,
  onChangeSearchText,
}: FilterMatchesHeaderProps) => {
  return (
    <div className="mb-[15px]">
      <SearchBar
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
    </div>
  );
};
