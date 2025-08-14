import { mainBannerImg } from '@/entities';
import { LogoWhite, TopImageBanner } from '@/shared';

export const MainBanner = () => {
  return (
    <TopImageBanner
      bannerContent={
        <div className="ml-12.5 flex flex-col gap-4">
          <h1 className="text-[32px] leading-12 font-bold text-[#fff]">
            실시간 축구 · 풋살 매치는
          </h1>
          <LogoWhite />
        </div>
      }
      bannerImage={mainBannerImg.topBanner}
    />
  );
};
