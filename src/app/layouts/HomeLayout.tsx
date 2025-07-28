import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/widgets';
import { SideBannerLg, SideBannerMd, SideBannerSm } from '@/shared';

import { MainBanner } from './ui';

export const HomeLayout = () => {
  return (
    <div className="min-h-screen flex-col">
      <Header />
      <div className="mt-[114px] mb-[150px] flex min-w-[1680px] flex-col justify-center gap-[50px] overflow-x-auto">
        <MainBanner />
        <div className="flex flex-row justify-center gap-[50px]">
          <aside className="ml-5 flex flex-col gap-[15px]">
            <SideBannerLg />
            <SideBannerSm />
            <SideBannerMd />
          </aside>
          <main className="flex">
            <Outlet />
          </main>
          <aside className="mr-5 flex flex-col gap-[15px]">
            <SideBannerSm />
            <SideBannerMd />
            <SideBannerLg />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};
