import { useEffect, useMemo, useState } from 'react';

import { Calendar as CalendarIcon } from 'lucide-react';

import {
  Button,
  Calendar,
  formatCalendarDate,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared';

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
  const [month, setMonth] = useState<Date | undefined>(date ?? undefined);

  const displayValue = useMemo(
    () => formatCalendarDate(date ?? undefined),
    [date]
  );

  useEffect(() => {
    setMonth(date ?? undefined);
  }, [date]);

  return (
    <div className="flex w-full flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative flex flex-1 gap-2">
            <Input
              id="date"
              value={displayValue}
              placeholder={placeholder}
              className="pointer-events-none h-[45px] bg-white px-[15px] py-2 text-[16px]"
              readOnly
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
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
