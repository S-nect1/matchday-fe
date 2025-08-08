import React from 'react';

export const MatchesTab: React.FC = () => {
  return (
    <div className="mt-6">
      {/* Header with Pagination */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">등록한 매치</h3>
        <div className="flex gap-2">
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

      {/* Match Cards */}
      <div className="space-y-4">
        {/* Match Card 1 */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex gap-4">
            {/* Left Image */}
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-green-400 to-green-600">
                {/* Placeholder for football field image */}
                <div className="flex h-full w-full items-center justify-center text-xs text-white">
                  축구장
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between">
                <div className="text-sm text-gray-600">6월 30일 금 12:00</div>
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  매치 자세히보기 &gt;
                </a>
              </div>
              <div className="mt-1 truncate text-sm font-medium text-gray-900">
                제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다.
                제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목...
              </div>
              <div className="mt-2 text-lg font-bold text-gray-900">
                50,000원
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  풋살
                </span>
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
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
                <span className="text-xs text-gray-500">강남구</span>
                <span className="text-xs text-gray-500">5 vs 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Match Card 2 */}
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex gap-4">
            {/* Left Image */}
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-green-400 to-green-600">
                {/* Placeholder for football field image */}
                <div className="flex h-full w-full items-center justify-center text-xs text-white">
                  축구장
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between">
                <div className="text-sm text-gray-600">6월 30일 금 12:00</div>
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  매치 자세히보기 &gt;
                </a>
              </div>
              <div className="mt-1 truncate text-sm font-medium text-gray-900">
                제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다.
                제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목...
              </div>
              <div className="mt-2 text-lg font-bold text-gray-900">
                50,000원
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  풋살
                </span>
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
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
                <span className="text-xs text-gray-500">강남구</span>
                <span className="text-xs text-gray-500">5 vs 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
