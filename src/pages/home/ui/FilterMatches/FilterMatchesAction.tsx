import { Button } from '@/shared';

type Props = {
  onReset: () => void;
  onApplyFilter: () => void;
};

export const FilterMatchesAction = ({ onReset, onApplyFilter }: Props) => {
  return (
    <div className="mt-[15px] flex w-full flex-row gap-[15px]">
      <Button
        size="lg"
        variant="hoverHighlight"
        className="flex-1"
        onClick={onReset}
      >
        초기화
      </Button>
      <Button
        size="lg"
        className="flex-1 bg-[#0043FF] text-[16px] leading-6 font-bold text-white hover:bg-[#0037cc]"
        onClick={onApplyFilter}
      >
        필터적용
      </Button>
    </div>
  );
};
