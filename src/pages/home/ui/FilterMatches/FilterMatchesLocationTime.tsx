import { DatePicker, CustomSelect } from '@/widgets';
import { KOREA_CITIES, DISTRICTS, HOURS, MINUTES } from '@/shared';

import { type MatchSearchFilters } from '../../model';

type Props = {
  location: MatchSearchFilters['location'];
  schedule: MatchSearchFilters['schedule'];
  onUpdateLocation: (updates: Partial<MatchSearchFilters['location']>) => void;
  onUpdateSchedule: (updates: Partial<MatchSearchFilters['schedule']>) => void;
};

export const FilterMatchesLocationTime = ({
  location,
  schedule,
  onUpdateLocation,
  onUpdateSchedule,
}: Props) => {
  return (
    <>
      <div className="flex flex-row gap-[15px]">
        <CustomSelect
          label="시/도"
          value={location.city}
          placeholder="시/도를 선택해 주세요."
          options={KOREA_CITIES}
          onChange={city => onUpdateLocation({ city })}
        />
        <CustomSelect
          label="구/군"
          value={location.district}
          placeholder="구/군을 선택해 주세요."
          options={DISTRICTS}
          onChange={district => onUpdateLocation({ district })}
        />
      </div>

      <div className="flex w-full flex-col gap-[5px]">
        <h3 className="text-lg leading-[27px] font-bold">날짜</h3>
        <DatePicker
          date={schedule.date}
          onChange={date => onUpdateSchedule({ date })}
        />
      </div>

      <div className="flex w-full flex-col gap-[5px]">
        <h3 className="text-lg leading-[27px] font-bold">경기일시</h3>
        <div className="flex flex-row gap-[15px]">
          <div className="flex w-full flex-row items-center gap-[10px]">
            <CustomSelect
              value={schedule.hour}
              placeholder="00"
              options={HOURS}
              onChange={hour => onUpdateSchedule({ hour })}
            />
            <span className="text-lg font-medium">시</span>
          </div>
          <div className="flex w-full flex-row items-center gap-[10px]">
            <CustomSelect
              value={schedule.minute}
              placeholder="00"
              options={MINUTES}
              onChange={minute => onUpdateSchedule({ minute })}
            />
            <span className="text-lg font-medium">분</span>
          </div>
        </div>
      </div>
    </>
  );
};
