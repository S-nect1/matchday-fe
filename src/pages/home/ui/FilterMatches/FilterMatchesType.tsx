import { memo } from 'react';

import {
  MATCH_TYPE_LABELS,
  MATCH_TYPES,
  SelectButton,
  TEAM_SIZE_LABELS,
  TEAM_TYPES,
} from '@/shared';

import { type MatchSearchFilters } from '../../model';

type FilterMatchesTypeProps = {
  matchType: MatchSearchFilters['matchType'];
  teamSize: MatchSearchFilters['teamSize'];
  onUpdateMatchType: (
    updates: Partial<MatchSearchFilters['matchType']>
  ) => void;
  onUpdateMatchTeamSize: (
    updates: Partial<MatchSearchFilters['teamSize']>
  ) => void;
};

const FilterMatchesTypeComponent = ({
  matchType,
  teamSize,
  onUpdateMatchType,
  onUpdateMatchTeamSize,
}: FilterMatchesTypeProps) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex flex-row gap-[15px]">
        {MATCH_TYPES.map(key => (
          <SelectButton
            label={MATCH_TYPE_LABELS[key]}
            isSelected={matchType[key]}
            onClickSelectButton={() =>
              onUpdateMatchType({
                [key]: !matchType[key],
              })
            }
          />
        ))}
      </div>
      <div className="flex flex-row gap-[15px]">
        {TEAM_TYPES.map(key => (
          <SelectButton
            label={TEAM_SIZE_LABELS[key]}
            isSelected={teamSize[key]}
            onClickSelectButton={() =>
              onUpdateMatchTeamSize({
                [key]: !teamSize[key],
              })
            }
          />
        ))}
      </div>
    </div>
  );
};

export const FilterMatchesType = memo(FilterMatchesTypeComponent);
