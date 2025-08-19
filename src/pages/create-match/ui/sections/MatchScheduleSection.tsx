import { CustomTimePicker, DatePicker, type TimeType } from '@/widgets';
import type { CreateMatchForm } from '../../model';

interface MatchScheduleSectionProps {
  schedule: {
    startDate: Date | null;
    startTime: TimeType | null;
    endDate: Date | null;
    endTime: TimeType | null;
  };
  updateSchedule: (updates: Partial<CreateMatchForm['schedule']>) => void;
}

export const MatchScheduleSection = ({
  schedule,
  updateSchedule,
}: MatchScheduleSectionProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="start-date" className="w-50 text-lg font-bold">
          경기일시<span className="text-[#ff4e3e]">*</span>
        </label>
        <div className="flex w-210 flex-row gap-[15px]">
          <DatePicker
            date={schedule.startDate}
            onChange={selectedStartDate =>
              updateSchedule({ startDate: selectedStartDate })
            }
          />
          <CustomTimePicker
            selectedTime={schedule.startTime}
            onChange={selectedStartTime =>
              updateSchedule({ startTime: selectedStartTime })
            }
          />
        </div>
      </div>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="end-date" className="w-50 text-lg font-bold">
          종료일시<span className="text-[#ff4e3e]">*</span>
        </label>
        <div className="flex w-210 flex-row gap-[15px]">
          <DatePicker
            date={schedule.endDate}
            onChange={selectedEndDate =>
              updateSchedule({ endDate: selectedEndDate })
            }
          />
          <CustomTimePicker
            selectedTime={schedule.endTime}
            onChange={selectedEndTime =>
              updateSchedule({ endTime: selectedEndTime })
            }
          />
        </div>
      </div>
    </>
  );
};
