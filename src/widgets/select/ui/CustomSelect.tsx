import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/shared';

type Props = {
  label?: string;
  value: string;
  placeholder?: string;
  options: string[];
  onChange: (value: string) => void;
};

export const CustomSelect = ({
  label,
  value,
  placeholder = '',
  options,
  onChange,
}: Props) => {
  return (
    <div className="flex w-full flex-col gap-[5px]">
      {label && <h3 className="text-lg leading-[27px] font-bold">{label}</h3>}
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-full shadow-none">
          <SelectValue placeholder={placeholder}>
            {value || placeholder}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
