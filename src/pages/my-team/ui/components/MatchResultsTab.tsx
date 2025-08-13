import React from 'react';

interface MatchResult {
  id: number;
  date: string;
  title: string;
  price: string;
  location: string;
  matchType: string;
  region: string;
  format: string;
  score: string;
  result: 'WIN' | 'LOSE' | 'DRAW';
}

export const MatchResultsTab: React.FC = () => {
  const matchResults: MatchResult[] = [
    {
      id: 1,
      date: '6월 30일 금 12:00',
      title:
        '제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목...',
      price: '50,000원',
      location: '한양대학교 대운동장',
      matchType: '풋살',
      region: '강남구',
      format: '5 vs 5',
      score: 'Score 2 - 1',
      result: 'WIN',
    },
    {
      id: 2,
      date: '6월 30일 금 12:00',
      title:
        '제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목입니다. 제목...',
      price: '50,000원',
      location: '한양대학교 대운동장',
      matchType: '풋살',
      region: '강남구',
      format: '5 vs 5',
      score: 'Score 2 - 1',
      result: 'WIN',
    },
  ];

  return (
    <div className="mt-6">
      {/* Header with Navigation */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">최근 경기 결과</h3>
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

      {/* Match Result Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {matchResults.map(match => (
          <div
            key={match.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            {/* Image Section */}
            <div className="relative h-32 bg-gradient-to-br from-green-400 to-green-600">
              {/* Location Tag */}
              <div className="absolute bottom-2 left-2">
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
                  {match.location}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
              {/* Date and Time */}
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
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
                {match.date}
              </div>

              {/* Title */}
              <div className="mb-2 truncate text-sm font-medium text-gray-900">
                {match.title}
              </div>

              {/* Price */}
              <div className="mb-3 text-lg font-bold text-gray-900">
                {match.price}
              </div>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  {match.matchType}
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  {match.region}
                </span>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                  {match.format}
                </span>
              </div>

              {/* Result Section */}
              <div className="relative">
                <div className="rounded-md bg-blue-900 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
                      {match.score}
                    </span>
                    <span className="rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      {match.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
