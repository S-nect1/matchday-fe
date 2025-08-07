import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomPagination, SearchBar } from '@/widgets';
import { mockMatchData } from '@/entities';
import { Button, PlusIconWhite } from '@/shared';

import { ListViewCard } from './ListViewCard';
import { GridViewCard } from './GridViewCard';
import { FilterMatches } from './FilterMatches';

export const HomePage = () => {
  const navigate = useNavigate();

  const [isGrid, setIsGrid] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지당 아이템 수 계산
  const itemsPerPage = isGrid ? 9 : 6;

  // 총 페이지 수 계산
  const totalPages = Math.ceil(mockMatchData.length / itemsPerPage);

  // 현재 페이지의 데이터 계산
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return mockMatchData.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // isGrid 변경 시 페이지 초기화
  const handleGridToggle = () => {
    setIsGrid(!isGrid);
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto flex w-fit flex-col justify-center gap-[50px]">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-[32px] leading-12 font-bold text-[#212121]">
          새로 등록된 매치
        </h1>
        <div className="flex flex-row items-center gap-5">
          <Button
            variant="none"
            className="flex flex-row gap-[5px] rounded-[5px] border border-[#E0E0E0] bg-[#fff] px-[15px] py-2 text-[16px] leading-6 font-medium text-[#757575] hover:bg-[#f5f5f5]"
            onClick={handleGridToggle}
          >
            {isGrid ? '그리드뷰' : '리스트뷰'}
          </Button>
          <FilterMatches
            searchText={searchText}
            setSearchText={setSearchText}
            onChangeSearchText={e => setSearchText(e.target.value)}
          />
          <div className="w-50">
            <SearchBar
              searchText={searchText}
              onChangeSearchText={e => setSearchText(e.target.value)}
            />
          </div>

          <Button
            variant="none"
            className="flex flex-row gap-[5px] rounded-[5px] bg-[#0043FF] px-[15px] py-2 text-[16px] leading-6 font-bold text-white hover:bg-[#0033cc]"
            onClick={() => navigate('/create-match')}
          >
            <PlusIconWhite />
            매치등록
          </Button>
        </div>
      </div>
      {isGrid ? (
        <div className="grid grid-flow-row grid-cols-3 gap-[30px]">
          {currentData.map(match => (
            <GridViewCard
              key={match.id}
              location={match.location}
              date={match.date}
              title={match.title}
              rentalFee={match.rentalFee}
              matchType={match.matchType}
              region={match.region}
              teamSize={match.teamSize}
              locationImg={match.locationImg}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-[30px]">
          {currentData.map(match => (
            <ListViewCard
              key={match.id}
              location={match.location}
              date={match.date}
              title={match.title}
              rentalFee={match.rentalFee}
              matchType={match.matchType}
              region={match.region}
              teamSize={match.teamSize}
              locationImg={match.locationImg}
            />
          ))}
        </div>
      )}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
