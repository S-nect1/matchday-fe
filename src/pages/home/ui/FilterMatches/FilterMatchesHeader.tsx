import React from 'react';

import { SearchBar } from '@/widgets';

type Props = {
  searchText: string;
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FilterMatchesHeader = ({
  searchText,
  onChangeSearchText,
}: Props) => {
  return (
    <div className="mb-[15px]">
      <SearchBar
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
      />
    </div>
  );
};
