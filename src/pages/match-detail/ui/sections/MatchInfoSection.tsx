import { LocationMap, type PlaceSearchResult } from '@/widgets';

import {
  Card,
  CardContent,
  MatchLocationIcon,
  MatchRentalFeeIcon,
  MatchScheduleIcon,
} from '@/shared';

type MatchInfoSectionProps = {
  schedule: string;
  rentalFee: string;
  location: PlaceSearchResult;
};

export const MatchInfoSection = ({
  schedule,
  rentalFee,
  location,
}: MatchInfoSectionProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="text-2xl leading-9">
        <span className="font-bold">매치</span>정보
      </h1>
      <Card className="rounded-[10px] p-7.5 shadow-none">
        <CardContent className="flex flex-col gap-[15px] px-0">
          <div className="flex flex-row gap-7.5">
            <div className="flex flex-row items-center gap-2.5">
              <MatchScheduleIcon />
              <h3 className="w-17 text-lg leading-[27px] font-bold">
                경기일시
              </h3>
            </div>
            <span className="text-lg leading-[27px]">{schedule}</span>
          </div>
          <div className="flex flex-row gap-7.5">
            <div className="flex flex-row items-center gap-2.5">
              <MatchRentalFeeIcon />
              <h3 className="w-17 text-lg leading-[27px] font-bold">대관료</h3>
            </div>
            <span className="text-lg leading-[27px]">
              <span className="text-primary font-bold">{rentalFee}</span>원
            </span>
          </div>
          <div className="flex flex-row gap-7.5">
            <div className="flex flex-row items-center gap-2.5">
              <MatchLocationIcon />
              <h3 className="w-17 text-lg leading-[27px] font-bold">
                매치 장소
              </h3>
            </div>
            <div className="flex flex-row items-center gap-2.5 text-lg leading-[27px]">
              <span>{location.place_name}</span>
              <div className="h-1 w-1 rounded-full bg-[#E0E0E0]" />
              <span>{location.road_address_name}</span>
            </div>
          </div>
          <LocationMap selectedPlace={location} />
          <div className="my-[5px] h-[1px] w-full bg-[#e0e0e0]" />
          <div className="flex flex-col gap-[5px] leading-6">
            <h3 className="font-bold">기타 참고사항</h3>
            <span className="text-[#616161]">
              일정 진행 시 특이사항 및 기타 참고사항 입력할 수 있습니다.
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
