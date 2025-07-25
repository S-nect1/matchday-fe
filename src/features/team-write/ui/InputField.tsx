import styles from './InputField.module.scss';
import type { Option } from '../../../shared/constant/areas';

export interface InputFieldProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
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
  placeholder,
  options = [],
  rows = 4,
  className,
}: InputFieldProps) => {
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={styles.select}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
