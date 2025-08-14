import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Button,
  Input,
  SearchIcon,
} from '@/shared';

export interface PlaceSearchResult {
  id: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string; // 경도
  y: string; // 위도
  place_url: string;
}

interface PlaceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlaceSelect: (place: PlaceSearchResult) => void;
}

export const PlaceSearchModal = ({
  isOpen,
  onClose,
  onPlaceSelect,
}: PlaceSearchModalProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<PlaceSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!searchKeyword.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }

    // 카카오맵 API가 로드되었는지 확인
    if (
      typeof (window as any).kakao === 'undefined' ||
      typeof (window as any).kakao.maps === 'undefined' ||
      typeof (window as any).kakao.maps.services === 'undefined'
    ) {
      alert('카카오맵 API가 로드되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      // 카카오맵 Places 서비스 객체 생성
      const ps = new (window as any).kakao.maps.services.Places();

      // 키워드로 장소 검색
      ps.keywordSearch(searchKeyword, (data: any[], status: any) => {
        setIsLoading(false);

        if (status === (window as any).kakao.maps.services.Status.OK) {
          // 검색 성공 시 결과 변환
          const transformedResults: PlaceSearchResult[] = data.map(
            (place: any) => ({
              id: place.id,
              place_name: place.place_name,
              address_name: place.address_name,
              road_address_name: place.road_address_name || place.address_name,
              x: place.x,
              y: place.y,
              place_url: place.place_url,
            })
          );

          setSearchResults(transformedResults);
          console.log('검색 성공:', transformedResults);
        } else if (
          status === (window as any).kakao.maps.services.Status.ZERO_RESULT
        ) {
          alert('검색 결과가 존재하지 않습니다.');
          setSearchResults([]);
        } else if (
          status === (window as any).kakao.maps.services.Status.ERROR
        ) {
          alert('검색 중 오류가 발생했습니다.');
          setSearchResults([]);
        }
      });
    } catch (error) {
      setIsLoading(false);
      console.error('검색 중 오류:', error);
      alert('검색 중 오류가 발생했습니다.');
    }
  };

  const handlePlaceSelect = (place: PlaceSearchResult) => {
    onPlaceSelect(place);
    onClose();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] max-w-[600px] overflow-hidden">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-bold">
            매치 장소 검색
          </DialogTitle>
        </DialogHeader>

        {/* 검색 입력 영역 */}
        <div className="mb-4 flex gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="장소명 또는 주소를 입력해주세요."
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-10"
            />
            <div className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform text-gray-400">
              <SearchIcon />
            </div>
          </div>
          <Button onClick={handleSearch} disabled={isLoading} className="px-6">
            {isLoading ? '검색중...' : '검색'}
          </Button>
        </div>

        {/* 검색 결과 영역 */}
        <div className="flex-1 overflow-y-auto">
          {searchResults.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <div className="mx-auto mb-3 h-12 w-12 text-gray-300">
                <SearchIcon />
              </div>
              <p>장소명 또는 주소로 검색해보세요.</p>
            </div>
          ) : (
            <div className="max-h-150 space-y-2 overflow-y-auto">
              {searchResults.map(place => (
                <div
                  key={place.id}
                  className="cursor-pointer rounded-lg border p-4 transition-colors hover:bg-gray-50"
                  onClick={() => handlePlaceSelect(place)}
                >
                  <h3 className="mb-1 text-lg font-semibold">
                    {place.place_name}
                  </h3>
                  <p className="mb-1 text-sm text-gray-600">
                    {place.road_address_name || place.address_name}
                  </p>
                  {place.road_address_name &&
                    place.road_address_name !== place.address_name && (
                      <p className="text-xs text-gray-500">
                        지번: {place.address_name}
                      </p>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 닫기 버튼 */}
        <div className="flex justify-end border-t pt-4">
          <Button variant="outline" onClick={onClose} className="px-6">
            닫기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
