import React from 'react';
import { Button } from '@/shared/ui/button';

interface TeamBannerProps {
  teamName: string;
  teamLevel: string;
  ageGroup: string;
  location: string;
  teamType: string;
  rating: number;
  description: string;
  showJoinButton?: boolean;
  onJoinClick?: () => void;
  className?: string;
}

export const TeamBanner: React.FC<TeamBannerProps> = ({
  teamName,
  teamLevel,
  ageGroup,
  location,
  teamType,
  rating,
  description,
  showJoinButton = false,
  onJoinClick,
  className = '',
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-white' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/*soccer image */}
      <div
        className="absolute top-0 left-0 h-full w-full opacity-90"
        style={{
          backgroundImage: `url('/asset-soccer.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.7)',
        }}
      ></div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0, 40, 152, 1), rgba(147, 180, 93, 1), rgba(0, 40, 152, 1))',
          mixBlendMode: 'overlay',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-8">
            {/* Team Name */}
            <h1 className="mb-4 text-2xl font-bold text-white">{teamName}</h1>

            {/* Tags and Rating */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
                {teamLevel}
              </span>
              <span className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
                {ageGroup}
              </span>
              <span className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
                {location}
              </span>
              <span className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800">
                {teamType}
              </span>
              <div className="flex items-center gap-1">
                {renderStars(rating)}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-6 text-white">{description}</p>
          </div>

          {/* Join Button */}
          {showJoinButton && (
            <div className="flex-shrink-0">
              <Button
                onClick={onJoinClick}
                className="rounded-md bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
              >
                팀 가입하기
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
