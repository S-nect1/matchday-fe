import { Checkbox } from '@/shared/ui/checkbox';

export const FormCheck = ({
  htmlFor,
  label,
  checked,
  onChange,
}: {
  htmlFor: string;
  label: string;
  checked: boolean;
  onChange?: () => void;
}) => {
  const handleClick = () => {
    onChange?.();
  };

  return (
    <div className="check flex items-center">
      <label htmlFor={htmlFor} className="flex cursor-pointer items-center">
        <Checkbox checked={checked} onCheckedChange={handleClick} />
        <input
          type="radio"
          checked={checked}
          onChange={handleClick}
          className="hidden"
          id={htmlFor}
        />
        <span className="pl-5 text-[1.1rem]">{label}</span>
      </label>
    </div>
  );
};
