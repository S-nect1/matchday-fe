import React from 'react';

interface TeamStatsCardProps {
  ProgressCircle: React.FC<{
    percent: number;
    size?: number;
    strokeWidth?: number;
    trackColor?: string;
    progressColor?: string;
    gapAngleDeg?: number;
  }>;
  period: string;
  wins: number;
  draws: number;
  losses: number;
  percent: number;
}

export const TeamStatsCard: React.FC<TeamStatsCardProps> = ({
  ProgressCircle,
  period,
  wins,
  draws,
  losses,
  percent,
}) => {
  return (
    <div className="flex items-center gap-4">
      <ProgressCircle percent={percent} size={76} strokeWidth={8} />
      <div>
        <div className="text-lg text-gray-600">{period}</div>
        <div className="mt-1 text-base">
          <span className="font-semibold text-blue-600">
            {wins.toString().padStart(2, '0')}승
          </span>
          <span className="mx-2 text-gray-400">
            {draws.toString().padStart(2, '0')}무
          </span>
          <span className="font-semibold text-red-500">
            {losses.toString().padStart(2, '0')}패
          </span>
        </div>
      </div>
    </div>
  );
};
