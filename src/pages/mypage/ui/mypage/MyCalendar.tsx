import { Calendar } from '@/shared';

export const MyCalendar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Calendar selected={[new Date()]} mode="multiple" />
    </div>
  );
};
