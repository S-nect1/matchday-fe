import { useState } from 'react';
import Picker from 'react-mobile-picker';

import { ClockIcon } from 'lucide-react';

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared';

const hours = Array.from({ length: 24 }, (_, i) =>
  String(i).padStart(2, '0')
).reverse();

const step = 5;
const minutes = Array.from({ length: 60 / step }, (_, i) =>
  String(i * step).padStart(2, '0')
).reverse();

export interface TimeType {
  hour: string;
  minute: string;
}

interface CustomTimePickerProps {
  selectedTime: TimeType | null;
  onChange: (time: TimeType) => void;
  placeholder?: string;
}

export const CustomTimePicker = ({
  selectedTime,
  onChange,
  placeholder = '시간을 선택해 주세요.',
}: CustomTimePickerProps) => {
  const [open, setOpen] = useState(false);

  const [matchTime, setMatchTime] = useState({
    hour: selectedTime ? selectedTime.hour : '12',
    minute: selectedTime ? selectedTime.minute : '30',
  });

  return (
    <div className="flex w-full flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative flex flex-1 gap-2">
            <Input
              id="date"
              value={
                selectedTime
                  ? `${selectedTime.hour}:${selectedTime.minute}`
                  : undefined
              }
              placeholder={placeholder}
              className="pointer-events-none h-[45px] bg-white px-[15px] py-2 text-[16px]"
            />
            <Button
              type="button"
              id="date-picker"
              size="icon"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <ClockIcon className="size-6 text-[#757575]" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="end">
          <div className="flex w-62 flex-col gap-6 rounded-lg bg-white p-4">
            <Picker
              value={matchTime}
              onChange={setMatchTime}
              wheelMode="natural" // 데스크톱 휠 동작
              height={220}
              itemHeight={44}
            >
              <Picker.Column name="hour" className="rotate-180">
                {hours.map(h => (
                  <Picker.Item
                    key={h}
                    value={h}
                    className="rotate-180 font-semibold"
                  >
                    {h}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <div className="self-center text-xl font-semibold">:</div>
              <Picker.Column name="minute" className="rotate-180">
                {minutes.map(m => (
                  <Picker.Item
                    key={m}
                    value={m}
                    className="rotate-180 font-semibold"
                  >
                    {m}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
            <div className="flex w-full flex-row items-center justify-end gap-2">
              <Button
                variant="hoverHighlight"
                size="sm"
                className="text-sm"
                onClick={() => {
                  setMatchTime({
                    hour: selectedTime ? selectedTime.hour : '12',
                    minute: selectedTime ? selectedTime.minute : '30',
                  });
                  setOpen(false);
                }}
              >
                취소
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  onChange({
                    hour: matchTime.hour,
                    minute: matchTime.minute,
                  });
                  setOpen(false);
                }}
              >
                확인
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
