import { useState } from 'react';

import { Calendar as CalendarIcon } from 'lucide-react';

import {
  Button,
  Calendar,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared';

function formatDate(date: Date | undefined): string {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

type DatePickerProps = {
  date: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
};

export const DatePicker = ({
  date,
  onChange,
  placeholder = '날짜를 선택해 주세요.',
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(date ? formatDate(date) : '');
  const [month, setMonth] = useState<Date | undefined>(date ?? undefined);

  return (
    <div className="flex w-full flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative flex flex-1 gap-2">
            <Input
              id="date"
              value={value}
              placeholder={placeholder}
              className="pointer-events-none h-[45px] bg-white px-[15px] py-2 text-[16px]"
              onChange={e => {
                const input = e.target.value;
                setValue(input);
              }}
              onKeyDown={e => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Button
              type="button"
              id="date-picker"
              size="icon"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-6 text-[#757575]" />
              <span className="sr-only">Select date</span>
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden border-none p-0"
          align="end"
        >
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
  );
};
