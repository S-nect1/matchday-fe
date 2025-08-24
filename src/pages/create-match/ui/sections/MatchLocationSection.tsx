import { LocationMap, type PlaceSearchResult } from '@/widgets';

import {
  ArrowDownForDetail,
  ArrowUpForNotDetail,
  Button,
  Input,
  LocationMarkerIcon,
} from '@/shared';

import type { CreateMatchForm } from '../../model';

interface MatchLocationSectionProps {
  location: {
    isPlaceSearchOpen: boolean;
    selectedPlace: PlaceSearchResult | null;
    zipCode: string;
    detailAddress: string;
    isLocationMapOpen: boolean;
  };
  updateLocation: (updates: Partial<CreateMatchForm['location']>) => void;
  handlePlaceSearchOpen: () => void;
}

export const MatchLocationSection = ({
  location,
  updateLocation,
  handlePlaceSearchOpen,
}: MatchLocationSectionProps) => {
  return (
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
            value={location.zipCode}
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
            location.selectedPlace?.road_address_name ||
            location.selectedPlace?.address_name
          }
          aria-label="주소"
        />
        <Input
          id="detail-address"
          className="h-[45px] w-full placeholder:text-[#BDBDBD]"
          placeholder="상세주소를 입력해 주세요."
          value={location.detailAddress}
          onChange={e => updateLocation({ detailAddress: e.target.value })}
          aria-label="상세주소"
        />
        {location.selectedPlace && (
          <div className="flex w-full flex-col gap-[10px] rounded-[5px] border border-[#E0E0E0] p-[15px]">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row gap-[5px]">
                <LocationMarkerIcon />
                <span className="text-lg font-bold">
                  {location.selectedPlace.place_name}
                </span>
              </div>
              <div
                className="flex cursor-pointer flex-row gap-[5px]"
                onClick={() =>
                  updateLocation({
                    isLocationMapOpen: !location.isLocationMapOpen,
                  })
                }
              >
                <span className="text-[16px] font-medium text-[#757575]">
                  {location.isLocationMapOpen ? '접기' : '위치 자세히보기'}
                </span>
                {location.isLocationMapOpen ? (
                  <ArrowUpForNotDetail />
                ) : (
                  <ArrowDownForDetail />
                )}
              </div>
            </div>
            <p className="text-[16px] text-[#757575]">
              {location.selectedPlace.road_address_name ||
                location.selectedPlace.address_name}
            </p>
            {location.isLocationMapOpen && (
              <LocationMap selectedPlace={location.selectedPlace} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
