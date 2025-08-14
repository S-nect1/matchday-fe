import {
  MATCH_TYPES,
  MATCH_TYPE_LABELS,
  type MatchSearchFilters,
} from '../../model';

import { SelectButton } from '@/shared';

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
