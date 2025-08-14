import { Calendar as CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Input } from '@/shared/ui/input';

import { Button } from '@/shared';

function formatDate(date: Date | undefined): string {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function parseDate(value: string): Date | null {
  // "2025.07.28" 형식만 허용
  const regex = /^\d{4}\.\d{2}\.\d{2}$/;
  if (!regex.test(value)) return null;

  const [year, month, day] = value.split('.').map(Number);
  const date = new Date(year, month - 1, day);

  return isNaN(date.getTime()) ? null : date;
}

type Props = {
  date: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
};

export const DatePicker = ({
  date,
  onChange,
  placeholder = '날짜를 선택해 주세요.',
}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(date ? formatDate(date) : '');
  const [month, setMonth] = useState<Date | undefined>(date ?? undefined);

  useEffect(() => {
    if (date) {
      setValue(formatDate(date));
      setMonth(date);
    } else {
      setValue('');
    }
  }, [date]);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="relative flex flex-1 gap-2">
        <Input
          id="date"
          value={value}
          placeholder={placeholder}
          className="h-[45px] bg-white px-[15px] py-2 text-[16px]"
          onChange={e => {
            const input = e.target.value;
            setValue(input);
            const parsed = parseDate(input);
            if (parsed) {
              onChange(parsed);
              setMonth(parsed);
            } else {
              onChange(null); // 유효하지 않으면 null 처리
            }
          }}
          onKeyDown={e => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              size="icon"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-6 text-[#757575]" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date ?? undefined}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={selectedDate => {
                if (!selectedDate) return;
                onChange(selectedDate);
                setValue(formatDate(selectedDate));
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
