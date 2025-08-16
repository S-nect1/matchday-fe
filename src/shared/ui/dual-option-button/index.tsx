import { SelectButton } from '../select-button';

interface DualOptionButtonProps<T> {
  firstLabel: string;
  secondLabel: string;
  firstItem: T;
  secondItem: T;
  isFirstSelected: boolean;
  onClickSelectButton: (selectedItem: T) => void;
}

export function DualOptionButton<T>({
  firstLabel,
  secondLabel,
  firstItem,
  secondItem,
  isFirstSelected,
  onClickSelectButton,
}: DualOptionButtonProps<T>) {
  return (
    <div className="flex w-210 flex-row gap-[15px]">
      <SelectButton
        label={firstLabel}
        isSelected={isFirstSelected}
        onClickSelectButton={() => onClickSelectButton(firstItem)}
      />
      <SelectButton
        label={secondLabel}
        isSelected={!isFirstSelected}
        onClickSelectButton={() => onClickSelectButton(secondItem)}
      />
    </div>
  );
}
