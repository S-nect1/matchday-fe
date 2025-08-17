import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import { RadioGroup, RadioGroupItem } from '../radio-group';

type BinaryRadioGroupProps = {
  value: boolean;
  onChange: (v: boolean) => void;
  trueLabel?: string; // 기본 'O'
  falseLabel?: string; // 기본 'X'
  name?: string; // 라디오 그룹 name (옵션)
  className?: string;
  disabled?: boolean;
};

export const BinaryRadioGroup = ({
  value,
  onChange,
  trueLabel = 'O',
  falseLabel = 'X',
  name,
  className,
  disabled,
}: BinaryRadioGroupProps) => {
  const autoName = React.useId();
  const groupName = name ?? `binary-${autoName}`;

  const labelClass =
    'flex cursor-pointer items-center gap-[10px] text-[16px] font-medium';

  return (
    <RadioGroup
      className={cn('flex flex-row gap-[30px]', className)}
      value={String(value)}
      onValueChange={v => onChange(v === 'true')}
      name={groupName}
    >
      <label htmlFor={`${groupName}-true`} className={labelClass}>
        <RadioGroupItem
          id={`${groupName}-true`}
          value="true"
          className="h-5 w-5"
          disabled={disabled}
        />
        {trueLabel}
      </label>

      <label htmlFor={`${groupName}-false`} className={labelClass}>
        <RadioGroupItem
          id={`${groupName}-false`}
          value="false"
          className="h-5 w-5"
          disabled={disabled}
        />
        {falseLabel}
      </label>
    </RadioGroup>
  );
};
