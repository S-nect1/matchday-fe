import { TopImageBanner } from '@/shared';

interface MatchBannerProps {
  teamName: string;
  teamSize: number;
  matchType: string;
  deadline: string;
  viewCount: number;
  createdAt: string;
  bannerImage: string;
}

export const MatchBanner = ({
  teamName,
  teamSize,
  matchType,
  deadline,
  viewCount,
  createdAt,
  bannerImage,
}: MatchBannerProps) => {
  return (
    <TopImageBanner
      bannerContent={
        <div className="flex w-full flex-col gap-4.5">
          <h1 className="text-[32px] leading-12 text-white">
            <span className="font-bold">{teamName}</span>의{' '}
            <span className="font-bold">{teamSize}</span>VS
            <span className="font-bold">{teamSize} </span>
            <span className="font-bold">{matchType}</span>매치
          </h1>
          <div className="flex flex-row items-end justify-between">
            <div className="rounded-full border border-white/30 bg-black/20 px-[15px] py-[5px] text-[16px] leading-6 text-white backdrop-blur-sm">
              <span className="font-bold">매치 신청 마감일 </span>
              {deadline}
            </div>
            <div className="flex flex-row items-center gap-2.5 text-[16px] leading-6 text-white">
              <span>조회 {viewCount}</span>
              <div className="h-1 w-1 rounded-full bg-white" />
              <span>등록일 {createdAt}</span>
            </div>
          </div>
        </div>
      }
      bannerImage={bannerImage}
      variant="match"
    />
  );
};
