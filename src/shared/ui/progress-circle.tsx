import React from 'react';

interface ProgressCircleProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  progressColor?: string;
  gapAngleDeg?: number;
  showPercentage?: boolean;
  className?: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percent,
  size = 110,
  strokeWidth = 12,
  trackColor = '#D1D5DB',
  progressColor = '#1E40FF',
  gapAngleDeg = 14,
  showPercentage = true,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const gapLength = (circumference * gapAngleDeg) / 360;
  const visibleLength = circumference - gapLength;
  const progressLength = visibleLength * (clamped / 100);

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative ${className}`}
    >
      <svg width={size} height={size} className="-rotate-90">
        {/* Track circle */}
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
        {/* Progress circle */}
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

      {/* Center content */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        {/* White background circle */}
        <svg width={size} height={size} className="absolute z-0">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius - strokeWidth / 2 + 1}
            fill="white"
          />
        </svg>

        {/* Percentage text */}
        {showPercentage && (
          <div className="z-10 text-base font-extrabold text-gray-900">
            {clamped}%
          </div>
        )}
      </div>
    </div>
  );
};
