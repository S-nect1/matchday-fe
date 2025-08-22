import { Card, CardContent } from '@/shared/ui/card';
import { MapPinIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';

interface TeamListItemProps {
  id: string;
  name: string;
  teamType: string;
  location: string;
  description: string;
  imageUrl: string;
  membersCount: number;
  sport: '축구' | '풋살';
  level: 'M1' | 'M2' | 'M3';
  ageRange: '10대' | '20대' | '30대' | '40대' | '50대+';
  gender: '남성' | '여성' | '혼성';
  onClick?: () => void;
}

export const TeamListItem = ({
  id,
  name,
  teamType,
  location,
  description,
  imageUrl,
  membersCount,
  sport,
  level,
  ageRange,
  gender,
  onClick,
}: TeamListItemProps) => {
  return (
    <Card
      className="w-full rounded-[10px] border border-transparent transition-colors duration-200 hover:border hover:border-[#0043FF]"
      style={{
        boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.10)',
      }}
    >
      <CardContent className="flex flex-row gap-[30px] px-[30px] py-[30px]">
        {/* Image */}
        <div className="relative h-fit min-w-[330px]">
          <img
            src={imageUrl}
            alt={name}
            className="h-[200px] w-[330px] rounded-[15px] object-cover"
          />
          <div className="absolute bottom-[15px] left-[15px] flex flex-row items-center gap-[5px] rounded-full border border-white/30 bg-black/25 px-[10px] py-[5px] backdrop-blur-sm">
            <MapPinIcon className="h-4 w-4 text-white" />
            <span className="text-[16px] leading-6 font-normal text-white">
              {location}
            </span>
          </div>
          <div className="absolute right-[15px] bottom-[15px] rounded-full bg-black/60 px-[10px] py-[5px]">
            <span className="text-xs font-semibold text-white">{teamType}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col gap-[15px]">
          {/* Top row */}
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <span className="rounded-full bg-blue-100 px-[10px] py-[5px] text-sm font-semibold text-blue-600">
                {level}
              </span>
              <span className="text-sm font-medium text-[#616161]">
                {ageRange}
              </span>
              <div className="h-[3px] w-[3px] rounded-full bg-[#e0e0e0]" />
              <span className="text-sm font-medium text-[#616161]">
                {gender}
              </span>
            </div>
            <button
              className="flex items-center gap-[5px] text-[16px] leading-6 font-medium text-[#757575] transition-colors hover:text-[#0043FF]"
              onClick={onClick}
            >
              <span>팀 자세히보기</span>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-xl leading-[30px] font-bold text-[#212121]">
            {name}
          </h2>

          {/* Description */}
          <p className="line-clamp-2 text-[16px] leading-6 text-[#616161]">
            {description}
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-[#e0e0e0]" />

          {/* Bottom info */}
          <div className="flex flex-row items-center gap-[10px]">
            <span className="rounded-full bg-gray-100 px-[10px] py-[5px] text-sm font-semibold text-gray-700">
              {sport}
            </span>
            <span className="text-sm font-medium text-[#616161]">팀원</span>
            <div className="h-[3px] w-[3px] rounded-full bg-[#e0e0e0]" />
            <span className="text-sm font-semibold text-[#212121]">
              {membersCount}명
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
