import React from 'react';

export const ScheduleTab: React.FC = () => {
  return (
    <div className="mt-6 flex gap-6">
      {/* Left Section - Event Cards */}
      <div className="flex-1 space-y-4">
        {/* Event Card 1 */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-5 w-5 items-center justify-center text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600">6월 30일 금 12:00</div>
              <div className="mt-1 truncate text-sm font-medium text-gray-900">
                제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입...
              </div>
              <div className="mt-2 flex gap-2">
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  한양대학교 대운동장
                </div>
                <div className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  풋살
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-5 w-5 items-center justify-center text-gray-500">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600">6월 30일 금 12:00</div>
              <div className="mt-1 truncate text-sm font-medium text-gray-900">
                제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입...
              </div>
              <div className="mt-2 flex gap-2">
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  한양대학교 대운동장
                </div>
                <div className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  풋살
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Navigation */}
      <div className="flex-1 rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex justify-end gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600">
            <svg
              className="h-4 w-4"
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
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300">
            <svg
              className="h-4 w-4"
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
      </div>
    </div>
  );
};
