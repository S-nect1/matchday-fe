import { mainBannerImg } from '@/entities';
import { LogoWhite } from '@/shared';

export const MainBanner = () => {
  return (
    <div
      className="mx-auto flex w-[1170px] flex-col justify-start gap-[15px] rounded-[10px] bg-cover bg-center py-[55px] pl-25"
      style={{
        backgroundImage: `url(${mainBannerImg.topBanner})`,
      }}
    >
      <h1 className="text-[32px] leading-12 font-bold text-[#fff]">
        실시간 축구 · 풋살 매치는
      </h1>
      <LogoWhite />
    </div>
  );
};
