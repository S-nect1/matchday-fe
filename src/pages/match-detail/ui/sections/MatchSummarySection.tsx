import { MatchSummaryItem } from '@/features';
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
      <MatchSummaryItem
        icon={<MatchTypeIcon />}
        label="매치종목"
        value={matchType}
      />
      <MatchSummaryItem
        icon={<MatchLocationIcon />}
        label="장소"
        value={place_name}
      />
      <MatchSummaryItem
        icon={<MatchRentalFeeIcon />}
        label="대관료"
        value={rentalFee}
      />
      <MatchSummaryItem
        icon={<MatchTeamSizeIcon />}
        label="인원수"
        value={teamSize}
      />
    </div>
  );
};
