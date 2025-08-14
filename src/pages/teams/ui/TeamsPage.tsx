import React from 'react';
import {
  MapPinIcon,
  ChevronRight as ChevronRightIcon,
  Filter,
  Search,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  X,
} from 'lucide-react';

import { Card } from '@/shared/ui/card';
// Select, Input 제거 (현재 디자인에서 미사용)
import { Button } from '@/shared/ui/button';
// Custom pagination will be rendered inline to match design
import { getProvinces, getCitiesByProvince } from '@/shared/constant/location';

type TeamListItem = {
  id: string;
  name: string;
  teamType: string;
  location: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
  membersCount: number;
  sport: '축구' | '풋살';
  level: 'M1' | 'M2' | 'M3';
  ageRange: '10대' | '20대' | '30대' | '40대' | '50대+';
  gender: '남성' | '여성' | '혼성';
};

const mockTeams: TeamListItem[] = Array.from({ length: 18 }).map((_, idx) => ({
  id: `team_${idx + 1}`,
  name: `매치데이 FC ${idx + 1}`,
  teamType: '소모임',
  location: '서울특별시 강남구',
  description:
    '즐겁게 축구하는 팀입니다. 주 1회 정기 모임, 친선전/대회 참가를 지향합니다.',
  imageUrl: '/team-banner-sample.png',
  createdAt: '5분 전',
  membersCount: 10,
  sport: Math.random() > 0.5 ? '축구' : '풋살',
  level: (['M1', 'M2', 'M3'] as const)[Math.floor(Math.random() * 3)],
  ageRange: (['10대', '20대', '30대', '40대', '50대+'] as const)[
    Math.floor(Math.random() * 5)
  ],
  gender: (['남성', '여성', '혼성'] as const)[Math.floor(Math.random() * 3)],
}));

export const TeamsPage: React.FC = () => {
  const [query, setQuery] = React.useState('');
  // 정렬/지역 상태는 현재 UI에서 사용하지 않으므로 보류
  const [sortBy] = React.useState('latest');
  const [location] = React.useState('all');

  // Filter modal state
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const provinces = getProvinces();
  const [selectedProvince, setSelectedProvince] = React.useState<string>('');
  const [selectedCity, setSelectedCity] = React.useState<string>('');
  const cities = selectedProvince ? getCitiesByProvince(selectedProvince) : [];
  const [selectedSport, setSelectedSport] = React.useState<
    '축구' | '풋살' | ''
  >('');
  const [selectedLevel, setSelectedLevel] = React.useState<
    'M1' | 'M2' | 'M3' | ''
  >('');
  const [selectedAge, setSelectedAge] = React.useState<
    '10대' | '20대' | '30대' | '40대' | '50대+' | ''
  >('');
  const [selectedGender, setSelectedGender] = React.useState<
    '남성' | '여성' | '혼성' | ''
  >('');

  const filtered = mockTeams
    .filter(t =>
      [t.name, t.description, t.location].some(text =>
        text.toLowerCase().includes(query.toLowerCase())
      )
    )
    .filter(t => (selectedSport ? t.sport === selectedSport : true))
    .filter(t => (selectedLevel ? t.level === selectedLevel : true))
    .filter(t => (selectedAge ? t.ageRange === selectedAge : true))
    .filter(t => (selectedGender ? t.gender === selectedGender : true))
    .filter(t =>
      selectedProvince && selectedCity
        ? t.location.includes(`${selectedProvince} ${selectedCity}`)
        : selectedProvince
          ? t.location.includes(selectedProvince)
          : true
    );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'latest') return 0; // mock 이므로 그대로 유지
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const visible =
    location === 'all'
      ? sorted
      : sorted.filter(t => t.location.includes(location));

  // Pagination (client-side mock)
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(visible.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const pageItems = visible.slice(startIndex, startIndex + pageSize);

  React.useEffect(() => {
    // Clamp current page when filter/sort changes
    if (currentPage > totalPages) setCurrentPage(1);
  }, [totalPages]);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-indigo-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/team-banner-sample.png)',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative flex items-center justify-between px-6 py-8 sm:px-10">
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
              팀 찾기
            </h1>
            <p className="mt-2 text-sm text-white/90">
              마음에 드는 팀을 검색하고 지원해보세요.
            </p>
          </div>
          <div className="hidden text-xs text-white/80 sm:block">
            총 {visible.length}개 팀
          </div>
        </div>
      </div>

      {/* Title + Search Controls */}
      <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-xl font-extrabold text-gray-900">새로 등록된 팀</h2>
        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <Button
            variant="outline"
            className="gap-1"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter className="h-4 w-4" />
            필터
          </Button>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="검색어를 입력해 주세요."
                className="w-64 border-0 border-b border-gray-300 bg-transparent px-2 py-2 text-sm placeholder-gray-400 focus:border-gray-500 focus:ring-0 focus:outline-none"
              />
              <button
                aria-label="search"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => {
                  /* no-op for mock */
                }}
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
          <Button onClick={() => (window.location.href = '/team-form')}>
            + 팀등록
          </Button>
        </div>
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="relative mt-10 w-[680px] max-w-[90vw] rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-extrabold">팀 검색</div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsFilterOpen(false)}
                aria-label="close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Sports */}
            <div>
              <div className="mb-2 text-sm font-semibold text-gray-700">
                종목
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {(['축구', '풋살'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() =>
                      setSelectedSport(prev => (prev === s ? '' : s))
                    }
                    className={`rounded-md border px-3 py-2 text-sm transition ${
                      selectedSport === s
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-700">
                  시/도
                </div>
                <select
                  value={selectedProvince}
                  onChange={e => {
                    setSelectedProvince(e.target.value);
                    setSelectedCity('');
                  }}
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">선택</option>
                  {provinces.map(p => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-700">
                  구/군
                </div>
                <select
                  value={selectedCity}
                  onChange={e => setSelectedCity(e.target.value)}
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">선택</option>
                  {cities.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Level */}
            <div className="mt-5">
              <div className="mb-2 text-sm font-semibold text-gray-700">
                팀실력
              </div>
              <div className="flex flex-wrap gap-2">
                {(['M1', 'M2', 'M3'] as const).map(level => (
                  <button
                    key={level}
                    onClick={() =>
                      setSelectedLevel(prev => (prev === level ? '' : level))
                    }
                    className={`rounded-md border px-3 py-1.5 text-sm transition ${
                      selectedLevel === level
                        ? 'border-blue-600 bg-blue-50 font-semibold text-blue-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Age */}
            <div className="mt-5">
              <div className="mb-2 text-sm font-semibold text-gray-700">
                연령대
              </div>
              <div className="flex flex-wrap gap-2">
                {(['10대', '20대', '30대', '40대', '50대+'] as const).map(a => (
                  <button
                    key={a}
                    onClick={() =>
                      setSelectedAge(prev => (prev === a ? '' : a))
                    }
                    className={`rounded-md border px-3 py-1.5 text-sm transition ${
                      selectedAge === a
                        ? 'border-blue-600 bg-blue-50 font-semibold text-blue-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Gender */}
            <div className="mt-5">
              <div className="mb-2 text-sm font-semibold text-gray-700">
                성별
              </div>
              <div className="flex flex-wrap gap-2">
                {(['남성', '여성', '혼성'] as const).map(g => (
                  <button
                    key={g}
                    onClick={() =>
                      setSelectedGender(prev => (prev === g ? '' : g))
                    }
                    className={`rounded-md border px-3 py-1.5 text-sm transition ${
                      selectedGender === g
                        ? 'border-blue-600 bg-blue-50 font-semibold text-blue-700'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedSport('');
                  setSelectedProvince('');
                  setSelectedCity('');
                  setSelectedLevel('');
                  setSelectedAge('');
                  setSelectedGender('');
                }}
              >
                초기화
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(false)}
                >
                  닫기
                </Button>
                <Button onClick={() => setIsFilterOpen(false)}>필터적용</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="mt-4 space-y-3">
        {pageItems.map(team => (
          <Card
            key={team.id}
            className="overflow-hidden border-gray-200 bg-white px-4 py-4 shadow-sm hover:shadow-md sm:px-6"
          >
            <div className="flex gap-4">
              {/* image */}
              <div className="relative h-36 w-56 shrink-0 overflow-hidden rounded-md">
                <img
                  src={team.imageUrl}
                  alt={team.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                  {team.teamType}
                </div>
              </div>

              {/* content */}
              <div className="min-w-0 flex-1">
                {/* top row */}
                <div className="flex items-center justify-between text-[13px] text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="h-4 w-4 text-blue-600" />
                    <span>{team.location}</span>
                  </div>
                  <button
                    className="hidden items-center gap-1 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:inline-flex"
                    onClick={() => (window.location.href = '/team-join')}
                  >
                    매치 자세히보기
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* title */}
                <div className="mt-3 text-lg font-extrabold text-gray-900">
                  {team.name}
                </div>

                {/* description */}
                <p className="mt-2 line-clamp-1 text-[13px] text-gray-600">
                  {team.description}
                </p>

                {/* bottom */}
                <div className="mt-4 border-t pt-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      팀원
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      {team.membersCount}명
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-6 flex w-full justify-center">
        <ul className="flex items-center gap-4 text-sm">
          {/* First */}
          <li className="flex items-center">
            <button
              className={`transition ${
                currentPage === 1
                  ? 'cursor-not-allowed text-gray-300'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              aria-label="first page"
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
          </li>
          {/* Prev */}
          <li className="flex items-center">
            <button
              className={`transition ${
                currentPage === 1
                  ? 'cursor-not-allowed text-gray-300'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              aria-label="previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </li>

          {/* Page numbers (show up to 5) */}
          {Array.from({ length: totalPages })
            .slice(0, 5)
            .map((_, i) => {
              const page = i + 1;
              const isActive = page === currentPage;
              return (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={
                      isActive
                        ? 'rounded-full bg-white px-3 py-1 font-semibold text-blue-600 shadow-sm ring-1 ring-gray-100'
                        : 'px-2 py-1 text-gray-500 hover:text-gray-700'
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {page}
                  </button>
                </li>
              );
            })}

          {/* Next */}
          <li className="flex items-center">
            <button
              className={`transition ${
                currentPage === totalPages
                  ? 'cursor-not-allowed text-gray-300'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              aria-label="next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </li>
          {/* Last */}
          <li className="flex items-center">
            <button
              className={`transition ${
                currentPage === totalPages
                  ? 'cursor-not-allowed text-gray-300'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              aria-label="last page"
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
