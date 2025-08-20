import {
  MatchLocationIcon,
  MatchRentalFeeIcon,
  MatchTeamSizeIcon,
  MatchTypeIcon,
} from '@/shared';

type MatchSummarySectionProps = {
  matchType: string;
  place_name: string;
  rentalFee: string;
  teamSize: string;
};

export const MatchSummarySection = ({
  matchType,
  place_name,
  rentalFee,
  teamSize,
}: MatchSummarySectionProps) => {
  return (
    <div className="flex flex-row gap-7.5">
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex flex-row items-center gap-[5px] leading-6 font-medium text-[#001F63]">
          <MatchTypeIcon />
          매치종목
        </div>
        <div className="h-[1px] w-full bg-[#92B4FF]" />
        <span className="font-bold">{matchType}</span>
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex flex-row items-center gap-[5px] leading-6 font-medium text-[#001F63]">
          <MatchLocationIcon />
          장소
        </div>
        <div className="h-[1px] w-full bg-[#92B4FF]" />
        <span className="font-bold">{place_name}</span>
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex flex-row items-center gap-[5px] leading-6 font-medium text-[#001F63]">
          <MatchRentalFeeIcon />
          대관료
        </div>
        <div className="h-[1px] w-full bg-[#92B4FF]" />
        <span className="font-bold">{rentalFee}</span>
      </div>
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex flex-row items-center gap-[5px] leading-6 font-medium text-[#001F63]">
          <MatchTeamSizeIcon />
          인원수
        </div>
        <div className="h-[1px] w-full bg-[#92B4FF]" />
        <span className="font-bold">{teamSize}</span>
      </div>
    </div>
  );
};
