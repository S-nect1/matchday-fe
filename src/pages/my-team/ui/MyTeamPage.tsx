import { Button } from '@/shared/ui/button';
import { useMyTeam } from '@/shared/hooks/use-my-team';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import React from 'react';
import bannerImg from '@/pages/my-team/assets/team-banner-sample.png';
import { TeamInfoTab } from './components/TeamInfoTab';
import { CalendarTab } from './components/CalendarTab';
import { ScheduleTab } from './components/ScheduleTab';
import { MatchesTab } from './components/MatchesTab';

export const MyTeamPage = () => {
  const { isMember, team, members, isLoading, error } = useMyTeam();
  const [activeTab, setActiveTab] = React.useState<
    'info' | 'calendar' | 'schedule' | 'matches'
  >('info');

  const ProgressCircle: React.FC<{
    percent: number;
    size?: number;
    strokeWidth?: number;
    trackColor?: string;
    progressColor?: string;
    gapAngleDeg?: number;
  }> = ({
    percent,
    size = 110,
    strokeWidth = 12,
    trackColor = '#D1D5DB',
    progressColor = '#1E40FF',
    gapAngleDeg = 14,
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const clamped = Math.max(0, Math.min(100, percent));
    const gapLength = (circumference * gapAngleDeg) / 360;
    const visibleLength = circumference - gapLength;
    const progressLength = visibleLength * (clamped / 100);

    return (
      <div style={{ width: size, height: size }} className="relative">
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${visibleLength} ${gapLength}`}
            strokeDashoffset={gapLength / 2}
            strokeLinecap="round"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${progressLength} ${circumference}`}
            strokeDashoffset={gapLength / 2}
            strokeLinecap="round"
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <svg width={size} height={size} className="absolute z-0">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius - strokeWidth / 2 + 1}
              fill="white"
            />
          </svg>
          <div className="z-10 text-base font-extrabold text-gray-900">
            {clamped}%
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto my-16">
        <div className="rounded-md border bg-white p-8 shadow">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto my-16">
        <div className="rounded-md border bg-white p-8 text-red-600 shadow">
          {error}
        </div>
      </div>
    );
  }

  if (!isMember) {
    return (
      <div className="container mx-auto my-10">
        {/* Banner */}
        <div
          className="relative overflow-hidden rounded-xl after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/100 after:content-['']"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-start justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                팀 이름입니다.
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                  M1
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                  20대
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                  서울특별시 강남구
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                  소모임
                </span>
                <span className="ml-2 text-yellow-300">★★★★★</span>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/95">
                팀 설명입니다. 팀 설명입니다. 팀 설명입니다. 팀 설명입니다. 팀
                설명입니다. 팀 설명입니다. 팀 설명입니다.
              </p>
            </div>
            <div>
              <Button
                className="rounded-md bg-[rgb(67,0,255)] px-6 py-2 text-white hover:bg-[rgb(50,0,200)]"
                onClick={() => (window.location.href = '/team-join')}
              >
                팀 가입하기
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="mt-8 rounded-xl border bg-white p-4 shadow-sm sm:p-6">
          <div className="grid h-12 grid-cols-4 border-b text-sm">
            <button
              className={`flex h-full w-full items-center justify-center border-b-2 font-semibold ${
                activeTab === 'info'
                  ? 'border-[rgb(67,0,255)] text-[rgb(67,0,255)]'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('info')}
            >
              팀 정보 · 리뷰
            </button>
            <button
              className={`flex h-full w-full items-center justify-center border-b-2 font-semibold ${
                activeTab === 'calendar'
                  ? 'border-[rgb(67,0,255)] text-[rgb(67,0,255)]'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('calendar')}
            >
              캘린더
            </button>
            <button
              className={`flex h-full w-full items-center justify-center border-b-2 font-semibold ${
                activeTab === 'schedule'
                  ? 'border-[rgb(67,0,255)] text-[rgb(67,0,255)]'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('schedule')}
            >
              일정
            </button>
            <button
              className={`flex h-full w-full items-center justify-center border-b-2 font-semibold ${
                activeTab === 'matches'
                  ? 'border-[rgb(67,0,255)] text-[rgb(67,0,255)]'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab('matches')}
            >
              등록한 매치
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'info' && (
            <TeamInfoTab ProgressCircle={ProgressCircle} />
          )}
          {activeTab === 'calendar' && (
            <CalendarTab ProgressCircle={ProgressCircle} />
          )}
          {activeTab === 'schedule' && <ScheduleTab />}
          {activeTab === 'matches' && <MatchesTab />}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-16">
      <div className="rounded-md border bg-white p-8 shadow">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{team?.teamName}</h1>
            <p className="text-gray-600">{team?.teamDescription}</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>{team?.teamType}</span>
              <span className="mx-2">•</span>
              <span>
                {team?.location.province} {team?.location.city}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">상의 유니폼</span>
            <div
              className="h-6 w-6 rounded-full border"
              style={{ backgroundColor: team?.uniformColor }}
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">팀원</h2>
          <ul className="divide-y">
            {members.map(m => (
              <li key={m.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-xs text-gray-500">{m.role}</div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  프로필 보기
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-3">
          <Button className="bg-[rgb(67,0,255)] text-white">
            팀 일정 보기
          </Button>
          <Button variant="outline">공지사항</Button>
        </div>
      </div>
    </div>
  );
};
