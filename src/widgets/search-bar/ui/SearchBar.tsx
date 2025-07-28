import type React from 'react';

import { SearchIcon } from '@/shared';

type Props = {
  searchText: string;
  onChangeSearchText: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ searchText, onChangeSearchText }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between border border-t-0 border-r-0 border-l-0 border-b-[#212121] py-2">
      <input
        className="w-[calc(100%-30px)] text-[16px] leading-6 font-normal text-ellipsis placeholder:text-[#bdbdbd]"
        type="text"
        value={searchText}
        onChange={onChangeSearchText}
        placeholder="검색어를 입력해 주세요."
      />
      <SearchIcon />
    </div>
  );
};
