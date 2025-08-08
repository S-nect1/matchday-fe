import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CustomSelect,
  DatePicker,
  PlaceSearchModal,
  LocationMap,
  type PlaceSearchResult,
} from '@/widgets';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  HOURS,
  BANK_LIST,
  CustomColorPicker,
  SelectButton,
  LocationMarkerIcon,
  ArrowDownForDetail,
  ArrowUpForNotDetail,
} from '@/shared';

import { HasBallCheck } from './HasBallCheck';

export const CreateMatchPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<'축구' | '풋살'>(
    '축구'
  );
  const [selectedTeamSize, setSelectedTeamSize] = useState<11 | 7>(11);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<string>('');
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [selectedEndTime, setSelectedEndTime] = useState<string>('');
  const [rentalFee, setRentalFee] = useState<number | undefined>(undefined);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState<string | undefined>(
    undefined
  );
  const [uniformColor, setUniformColor] = useState<string>('#fff');
  const [hasBall, setHasBall] = useState<boolean>(false);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  // 장소 검색 관련 상태
  const [isPlaceSearchOpen, setIsPlaceSearchOpen] = useState<boolean>(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceSearchResult | null>(
    null
  );
  const [zipCode, setZipCode] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [isLocationMapOpen, setIsLocationMapOpen] = useState<boolean>(false);

  // 장소 검색 관련 핸들러
  const handlePlaceSearchOpen = () => {
    setIsPlaceSearchOpen(true);
  };

  const handlePlaceSearchClose = () => {
    setIsPlaceSearchOpen(false);
  };

  const handlePlaceSelect = (place: PlaceSearchResult) => {
    setSelectedPlace(place);

    // 좌표를 주소로 변환하여 우편번호 추출
    const geocoder = new (window as any).kakao.maps.services.Geocoder();

    geocoder.coord2Address(
      parseFloat(place.x),
      parseFloat(place.y),
      (result: any, status: any) => {
        if (status === (window as any).kakao.maps.services.Status.OK) {
          const addressInfo = result[0];
          if (addressInfo.road_address) {
            // 도로명 주소에서 우편번호 추출
            setZipCode(addressInfo.road_address.zone_no || '');
          } else if (addressInfo.address) {
            // 지번 주소에서 우편번호 추출 (fallback)
            setZipCode(addressInfo.address.zip_code || '');
          }
        } else {
          // API 호출 실패 시 기본값 설정
          setZipCode('');
        }
      }
    );

    console.log('선택된 장소:', place);
  };

  // 지도 클릭 시 카카오맵 웹으로 연결
  const handleMapClick = useCallback(() => {
    if (selectedPlace) {
      const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(selectedPlace.place_name)},${selectedPlace.y},${selectedPlace.x}`;
      window.open(kakaoMapUrl, '_blank');
    }
  }, [selectedPlace]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('매치 등록하기. 서버 요청 필요');
  };

  return (
    <>
      <Card
        className="mx-auto mt-[114px] mb-[150px] w-[1170px] gap-[50px] rounded-[10px] p-[50px]"
        style={{
          boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.10)',
        }}
      >
        <CardHeader className="px-0">
          <CardTitle className="text-[32px] leading-12 font-bold">
            매치 정보를 입력해주세요.
          </CardTitle>
        </CardHeader>
        <CardContent className="relative flex flex-col gap-[50px] px-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[50px]">
            <div className="flex flex-row items-center gap-[30px]">
              <label
                htmlFor="match-category"
                className="w-50 text-lg font-bold"
              >
                매치종목<span className="text-[#ff4e3e]">*</span>
              </label>
              <div
                id="match-category"
                className="flex w-210 flex-row gap-[15px]"
                role="group"
                aria-labelledby="match-category"
              >
                <SelectButton
                  label="축구"
                  isSelected={selectedCategory === '축구'}
                  onClickSelectButton={() => setSelectedCategory('축구')}
                />
                <SelectButton
                  label="풋살"
                  isSelected={selectedCategory === '풋살'}
                  onClickSelectButton={() => setSelectedCategory('풋살')}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="team-size" className="w-50 text-lg font-bold">
                인원 수<span className="text-[#ff4e3e]">*</span>
              </label>
              <div
                id="team-size"
                className="flex w-210 flex-row gap-[15px]"
                role="group"
                aria-labelledby="team-size"
              >
                <SelectButton
                  label="11 vs 11"
                  isSelected={selectedTeamSize === 11}
                  onClickSelectButton={() => setSelectedTeamSize(11)}
                />
                <SelectButton
                  label="7 vs 7"
                  isSelected={selectedTeamSize === 7}
                  onClickSelectButton={() => setSelectedTeamSize(7)}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="start-date" className="w-50 text-lg font-bold">
                경기일시<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row gap-[15px]">
                <DatePicker
                  date={selectedStartDate}
                  onChange={setSelectedStartDate}
                />
                <CustomSelect
                  value={selectedStartTime}
                  placeholder="경기 시간을 선택해 주세요."
                  options={HOURS}
                  onChange={setSelectedStartTime}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="end-date" className="w-50 text-lg font-bold">
                종료일시<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row gap-[15px]">
                <DatePicker
                  date={selectedEndDate}
                  onChange={setSelectedEndDate}
                />
                <CustomSelect
                  value={selectedEndTime}
                  placeholder="종료 시간을 선택해 주세요."
                  options={HOURS}
                  onChange={setSelectedEndTime}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="zip-code" className="w-50 text-lg font-bold">
                매치장소<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex flex-col gap-[10px]">
                <div className="flex w-210 flex-row items-center gap-[10px]">
                  <Input
                    id="zip-code"
                    className="h-[45px] w-full bg-[#FAFAFA] placeholder:text-[#BDBDBD]"
                    disabled={true}
                    placeholder="우편번호"
                    value={zipCode}
                  />
                  <Button
                    type="button"
                    variant="hoverHighlight"
                    className="h-[45px] w-[110px]"
                    onClick={handlePlaceSearchOpen}
                  >
                    검색
                  </Button>
                </div>
                <Input
                  id="address"
                  className="h-[45px] w-full bg-[#FAFAFA] placeholder:text-[#BDBDBD]"
                  disabled={true}
                  placeholder="주소"
                  value={
                    selectedPlace?.road_address_name ||
                    selectedPlace?.address_name
                  }
                  aria-label="주소"
                />
                <Input
                  id="detail-address"
                  className="h-[45px] w-full placeholder:text-[#BDBDBD]"
                  placeholder="상세주소를 입력해 주세요."
                  value={detailAddress}
                  onChange={e => setDetailAddress(e.target.value)}
                  aria-label="상세주소"
                />
                {selectedPlace && (
                  <div className="flex w-full flex-col gap-[10px] rounded-[5px] border border-[#E0E0E0] p-[15px]">
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row gap-[5px]">
                        <LocationMarkerIcon />
                        <span className="text-lg font-bold">
                          {selectedPlace.place_name}
                        </span>
                      </div>
                      <div
                        className="flex cursor-pointer flex-row gap-[5px]"
                        onClick={() => setIsLocationMapOpen(!isLocationMapOpen)}
                      >
                        <span className="text-[16px] font-medium text-[#757575]">
                          {isLocationMapOpen ? '접기' : '위치 자세히보기'}
                        </span>
                        {isLocationMapOpen ? (
                          <ArrowUpForNotDetail />
                        ) : (
                          <ArrowDownForDetail />
                        )}
                      </div>
                    </div>
                    <p className="text-[16px] text-[#757575]">
                      {selectedPlace.road_address_name ||
                        selectedPlace.address_name}
                    </p>
                    {isLocationMapOpen && (
                      <LocationMap
                        selectedPlace={selectedPlace}
                        width="100%"
                        height="250px"
                        level={3}
                        onClick={handleMapClick}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="rental-fee" className="w-50 text-lg font-bold">
                대관료<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row items-center gap-[10px] text-lg font-medium">
                <Input
                  id="rental-fee"
                  type="number"
                  className="h-[45px]"
                  value={rentalFee}
                  onChange={e => setRentalFee(Number(e.target.value))}
                  placeholder="대관비 총액을 입력해주세요. 매칭 확정 후 절반이 입금됩니다."
                />
                원
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="bank-select" className="w-50 text-lg font-bold">
                계좌번호<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex w-210 flex-row gap-[15px]">
                <CustomSelect
                  value={selectedBank}
                  placeholder="은행을 선택해 주세요."
                  options={BANK_LIST}
                  onChange={setSelectedBank}
                />
                <Input
                  id="account-number"
                  className="h-[45px]"
                  value={accountNumber}
                  onChange={e => setAccountNumber(e.target.value)}
                  placeholder="대관비 입금용 ex)0000-000-000000"
                  aria-label="계좌번호"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="uniform-color" className="w-50 text-lg font-bold">
                상의 유니폼 색깔<span className="text-[#ff4e3e]">*</span>
              </label>
              <div className="flex flex-row items-center gap-[10px]">
                <CustomColorPicker
                  uniformColor={uniformColor}
                  setUniformColor={setUniformColor}
                />
                <span className="text-[16px] text-[#bdbdbd]">
                  색깔을 선택해 주세요.
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[30px]">
              <label htmlFor="has-ball" className="w-50 text-lg font-bold">
                공 보유 유무<span className="text-[#ff4e3e]">*</span>
              </label>
              <HasBallCheck hasBall={hasBall} setHasBall={setHasBall} />
            </div>
            <div className="flex w-full flex-row justify-end gap-[15px]">
              <Button
                type="button"
                size="lg"
                variant="hoverHighlight"
                className="w-60"
                onClick={() => navigate(-1)}
              >
                돌아가기
              </Button>
              <Button
                type="submit"
                size="lg"
                className="w-60 bg-[#0043FF] text-[16px] leading-6 font-bold text-white hover:bg-[#0037cc]"
              >
                매치 등록하기
              </Button>
              <div className="absolute right-0 bottom-18 flex flex-row items-center gap-[10px]">
                <input
                  id="agreement"
                  type="checkbox"
                  checked={isAgreed}
                  onChange={() => setIsAgreed(!isAgreed)}
                  className="h-5 w-5 accent-[#0043FF]"
                  required
                />
                <label
                  htmlFor="agreement"
                  className="text-center text-[16px] font-medium"
                >
                  매치 노쇼 이용약관 동의하기
                </label>
                <span className="border-b text-xs leading-[18px] text-[#BDBDBD]">
                  보기
                </span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* 장소 검색 모달 */}
      <PlaceSearchModal
        isOpen={isPlaceSearchOpen}
        onClose={handlePlaceSearchClose}
        onPlaceSelect={handlePlaceSelect}
      />
    </>
  );
};
