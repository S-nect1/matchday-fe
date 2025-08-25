import React from 'react';
import { Calendar } from '@/shared/ui/calendar';

interface CalendarTabProps {
  ProgressCircle: React.FC<{
    percent: number;
    size?: number;
    strokeWidth?: number;
    trackColor?: string;
    progressColor?: string;
    gapAngleDeg?: number;
  }>;
}

export const CalendarTab: React.FC<CalendarTabProps> = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 14) // 2025년 6월 14일
  );

  // Mock data - 실제로는 API에서 가져올 데이터
  const events = [
    {
      id: '1',
      date: new Date(2025, 5, 2), // 2025년 6월 2일
      title: '6월 2일 금요일 12:00',
      location: '마포 풋살장',
      description:
        '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.',
    },
    {
      id: '2',
      date: new Date(2025, 5, 14), // 2025년 6월 14일
      title: '6월 14일 금요일 12:00',
      location: '마포 풋살장',
      description:
        '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.',
    },
    {
      id: '3',
      date: new Date(2025, 5, 16), // 2025년 6월 16일
      title: '6월 16일 금요일 12:00',
      location: '마포 풋살장',
      description:
        '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.',
    },
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  // 선택된 날짜의 이벤트 찾기
  const selectedEvent = selectedDate
    ? events.find(
        event =>
          event.date.getDate() === selectedDate.getDate() &&
          event.date.getMonth() === selectedDate.getMonth() &&
          event.date.getFullYear() === selectedDate.getFullYear()
      )
    : null;

  return (
    <div className="mt-6 flex gap-6">
      {/* Calendar Section */}
      <div className="flex-1">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border"
        />
      </div>

      {/* Events Section */}
      <div className="flex-1">
        <div className="max-h-96 space-y-3 overflow-y-auto">
          {selectedEvent ? (
            <div className="rounded-lg border-2 border-blue-500 bg-white p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                  {selectedEvent.date.getDate()}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {selectedEvent.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {selectedEvent.location}
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {selectedEvent.description}
                  </div>
                </div>
              </div>
            </div>
          ) : events.length > 0 ? (
            events.map(event => (
              <div
                key={event.id}
                className="rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                    {event.date.getDate()}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {event.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {event.location}
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      {event.description}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-gray-500">
              이번 달에 예정된 일정이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
