import { DualOptionButton } from '@/shared';

import type { CreateMatchForm } from '../../model';

interface MatchTypeSectionProps {
  matchType: {
    category: '축구' | '풋살' | null;
    teamSize: 11 | 8 | 6 | 5 | null;
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
          isSecondSelected={matchType.category === '풋살'}
          onClickSelectButton={selectedCategory =>
            updateMatchType({ category: selectedCategory, teamSize: null })
          }
        />
      </div>
      {matchType.category !== null && (
        <div className="flex flex-row items-center gap-[30px]">
          <label htmlFor="team-size" className="w-50 text-lg font-bold">
            인원 수<span className="text-[#ff4e3e]">*</span>
          </label>
          {matchType.category === '축구' ? (
            <DualOptionButton<11 | 8>
              firstLabel="11 vs 11"
              secondLabel="8 vs 8"
              firstItem={11}
              secondItem={8}
              isFirstSelected={matchType.teamSize === 11}
              isSecondSelected={matchType.teamSize === 8}
              onClickSelectButton={selectedTeamSize =>
                updateMatchType({ teamSize: selectedTeamSize })
              }
            />
          ) : (
            <DualOptionButton<6 | 5>
              firstLabel="6 vs 6"
              secondLabel="5 vs 5"
              firstItem={6}
              secondItem={5}
              isFirstSelected={matchType.teamSize === 6}
              isSecondSelected={matchType.teamSize === 5}
              onClickSelectButton={selectedTeamSize =>
                updateMatchType({ teamSize: selectedTeamSize })
              }
            />
          )}
        </div>
      )}
    </>
  );
};
