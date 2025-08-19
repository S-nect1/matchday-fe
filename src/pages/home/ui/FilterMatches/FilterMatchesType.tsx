import { MATCH_TYPE_LABELS, MATCH_TYPES, SelectButton } from '@/shared';

import { type MatchSearchFilters } from '../../model';

type Props = {
  matchType: MatchSearchFilters['matchType'];
  onUpdateMatchType: (
    updates: Partial<MatchSearchFilters['matchType']>
  ) => void;
};

export const FilterMatchesType = ({ matchType, onUpdateMatchType }: Props) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-[15px]">
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
  );
};
