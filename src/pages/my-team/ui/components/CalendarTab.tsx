import React from 'react';

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

export const CalendarTab: React.FC<CalendarTabProps> = ({ ProgressCircle }) => {
  return (
    <div className="mt-6 flex gap-6">
      {/* Calendar Section */}
      <div className="flex-1">
        {/* Month Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h3 className="text-lg font-semibold">2025년 6월</h3>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500">
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>

        {/* Calendar Grid */}
        <div className="mt-2 grid grid-cols-7 gap-1">
          {/* June 2025 calendar dates */}
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            const isEventDay = [2, 14, 16].includes(day);
            return (
              <div
                key={day}
                className={`flex h-10 items-center justify-center text-sm ${
                  isEventDay
                    ? 'rounded-full bg-blue-500 text-white'
                    : 'rounded text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events Section */}
      <div className="flex-1">
        <div className="max-h-96 space-y-3 overflow-y-auto">
          {/* Event 1 */}
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                2
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  6월 2일 금요일 12:00
                </div>
                <div className="text-sm text-gray-600">마포 풋살장</div>
                <div className="mt-1 text-xs text-gray-500">
                  내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
                  내용입니다. 내용입니다. 내용입니다.
                </div>
              </div>
            </div>
          </div>

          {/* Event 2 (Selected) */}
          <div className="rounded-lg border-2 border-blue-500 bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                14
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  6월 14일 금요일 12:00
                </div>
                <div className="text-sm text-gray-600">마포 풋살장</div>
                <div className="mt-1 text-xs text-gray-500">
                  내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
                  내용입니다. 내용입니다. 내용입니다.
                </div>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="rounded-lg border border-gray-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                16
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  6월 16일 금요일 12:00
                </div>
                <div className="text-sm text-gray-600">마포 풋살장</div>
                <div className="mt-1 text-xs text-gray-500">
                  내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
                  내용입니다. 내용입니다. 내용입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
