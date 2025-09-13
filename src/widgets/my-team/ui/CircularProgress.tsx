import { useMemo } from 'react';

export type CircularProgressProps = {
  value: number;
  size?: number;
  stroke?: number;
  trackColor?: string;
  progressColor?: string;
  showLabel?: boolean;
  className?: string;
  ariaLabel?: string;
};

export const CircularProgress = ({
  value,
  size = 120,
  stroke = 10,
  trackColor = '#fff',
  progressColor = 'blue',
  showLabel = true,
  className = '',
  ariaLabel = 'progress',
}: CircularProgressProps) => {
  const clamped = Math.max(0, Math.min(100, Number(value) || 0));
  const radius = useMemo(() => (size - stroke) / 2, [size, stroke]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);
  const offset = useMemo(
    () => circumference * (1 - clamped / 100),
    [clamped, circumference]
  );

  return (
    <div
      className={`${className} relative`}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-label={ariaLabel}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
          <circle
            r={radius}
            cx={0}
            cy={0}
            fill="transparent"
            stroke={trackColor}
            strokeWidth={stroke}
            strokeLinecap="round"
          ></circle>
          <circle
            r={radius}
            cx={0}
            cy={0}
            fill="transparent"
            stroke={progressColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 600ms ease, stroke 200ms ease',
              transformOrigin: 'center',
            }}
          />
        </g>
      </svg>
      <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        {value}%
      </span>
    </div>
  );
};
