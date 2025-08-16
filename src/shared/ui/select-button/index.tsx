import { Button } from '@/shared';

type SelectButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isSelected: boolean;
  onClickSelectButton: () => void;
};

export const SelectButton = ({
  label,
  type = 'button',
  isSelected,
  onClickSelectButton,
}: SelectButtonProps) => {
  return (
    <Button
      key={label}
      type={type}
      variant="select"
      size="lg"
      className="flex-1 border-1"
      style={{
        borderColor: isSelected ? '#0043FF' : '',
        borderWidth: isSelected ? '2px' : '',
      }}
      onClick={onClickSelectButton}
    >
      {label}
    </Button>
  );
};
