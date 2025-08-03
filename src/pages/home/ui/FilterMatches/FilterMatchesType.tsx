import { Button } from '@/shared';

import {
  MATCH_TYPES,
  MATCH_TYPE_LABELS,
  type MatchSearchFilters,
} from '../../model';

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
        <Button
          key={key}
          variant="select"
          size="lg"
          className="flex-1 border-2"
          style={{
            borderColor: matchType[key] ? '#0043FF' : '',
          }}
          onClick={() =>
            onUpdateMatchType({
              [key]: !matchType[key],
            })
          }
        >
          {MATCH_TYPE_LABELS[key]}
        </Button>
      ))}
    </div>
  );
};
