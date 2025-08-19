import { DualOptionButton } from '@/shared';

import type { CreateMatchForm } from '../../model';

interface MatchTypeSectionProps {
  matchType: {
    category: '축구' | '풋살';
    teamSize: 11 | 7;
  };
  updateMatchType: (updates: Partial<CreateMatchForm['matchType']>) => void;
}

export const MatchTypeSection = ({
  matchType,
  updateMatchType,
}: MatchTypeSectionProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="match-category" className="w-50 text-lg font-bold">
          매치종목<span className="text-[#ff4e3e]">*</span>
        </label>
        <DualOptionButton<'축구' | '풋살'>
          firstLabel="축구"
          secondLabel="풋살"
          firstItem="축구"
          secondItem="풋살"
          isFirstSelected={matchType.category === '축구'}
          onClickSelectButton={selectedCategory =>
            updateMatchType({ category: selectedCategory })
          }
        />
      </div>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="team-size" className="w-50 text-lg font-bold">
          인원 수<span className="text-[#ff4e3e]">*</span>
        </label>
        <DualOptionButton<11 | 7>
          firstLabel="11 vs 11"
          secondLabel="7 vs 7"
          firstItem={11}
          secondItem={7}
          isFirstSelected={matchType.teamSize === 11}
          onClickSelectButton={selectedTeamSize =>
            updateMatchType({ teamSize: selectedTeamSize })
          }
        />
      </div>
    </>
  );
};
