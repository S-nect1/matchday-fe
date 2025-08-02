import styles from './InputField.module.scss';
import type { Option } from '../../../shared/constant/areas';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../shared/ui/select';

export interface InputFieldProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  name: string;
  value: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onSelectChange?: (value: string) => void;
  placeholder?: string;
  options?: Option[];
  rows?: number;
  className?: string;
}

export const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onSelectChange,
  placeholder,
  options = [],
  rows = 4,
  className,
}: InputFieldProps) => {
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <Select value={value} onValueChange={onSelectChange}>
            <SelectTrigger className={styles.select}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'textarea':
        return (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            className={styles.textarea}
          />
        );

      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.input}
          />
        );
    }
  };

  return (
    <div className={`${styles.fieldGroup} ${className || ''}`}>
      <label className={styles.label}>{label}</label>
      {renderInput()}
    </div>
  );
};
