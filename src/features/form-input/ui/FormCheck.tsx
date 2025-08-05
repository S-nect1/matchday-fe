import { Checkbox } from '@/shared/ui/checkbox';

export const FormCheck = ({
  htmlFor,
  label,
  checked,
}: {
  htmlFor: string;
  label: string;
  checked: boolean;
}) => {
  return (
    <div className="check flex items-center">
      <label htmlFor={htmlFor}>
        <Checkbox checked={checked} />
        <input type="radio" checked={checked} className="hidden" id={htmlFor} />
        <span className="pl-5 text-[1.1rem]">{label}</span>
      </label>
    </div>
  );
};
