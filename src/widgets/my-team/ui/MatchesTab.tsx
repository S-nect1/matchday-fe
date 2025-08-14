import React from 'react';

interface MatchApplication {
  id: number;
  teamName: string;
  teamLevel: string;
  teamInfo: string;
}

export const MatchesTab: React.FC = () => {
  const applications: MatchApplication[] = [
    {
      id: 1,
      teamName: '팀 이름입니다. 팀 이름입니다. 팀 이름입니다.',
      teamLevel: 'MI',
      teamInfo: '20대 서울특별시 성동구 남성',
    },
    {
      id: 2,
      teamName: '팀 이름입니다. 팀 이름입니다. 팀 이름입니다.',
      teamLevel: 'MI',
      teamInfo: '20대 서울특별시 성동구 남성',
    },
    {
      id: 3,
      teamName: '팀 이름입니다. 팀 이름입니다. 팀 이름입니다.',
      teamLevel: 'MI',
      teamInfo: '20대 서울특별시 성동구 남성',
    },
  ];

  const handleAccept = (id: number) => {
    console.log('수락:', id);
  };

  const handleReject = (id: number) => {
    console.log('거절:', id);
  };

  return (
    <div className="mt-6 space-y-8">
      {/* Registered Matches Section */}
      <div>
        {/* Header with Navigation */}
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
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="h-4 w-4 text-blue-600"
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
                    6월 30일 금 12:00
                  </div>
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
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    풋살
                  </span>
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
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    강남구
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    5 vs 5
                  </span>
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
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="h-4 w-4 text-blue-600"
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
                    6월 30일 금 12:00
                  </div>
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
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    풋살
                  </span>
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
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    강남구
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    5 vs 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Received Applications Section */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">받은 매치 신청</h3>
          <p className="mt-1 text-sm text-gray-600">대기중인 신청 3팀</p>
        </div>

        <div className="space-y-3">
          {applications.map(application => (
            <div
              key={application.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="truncate text-sm font-medium text-gray-900">
                    {application.teamName}
                  </div>
                  <span className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                    {application.teamLevel}
                  </span>
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {application.teamInfo}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(application.id)}
                  className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                >
                  수락
                </button>
                <button
                  onClick={() => handleReject(application.id)}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  거절
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
