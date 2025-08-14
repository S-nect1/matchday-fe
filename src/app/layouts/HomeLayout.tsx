import { Outlet } from 'react-router-dom';

import { MainBanner, SideBannerLg, SideBannerMd, SideBannerSm } from './ui';

import { Footer, Navbar } from '@/widgets';

export const HomeLayout = () => {
  return (
    <div className="min-h-screen flex-col">
      <Navbar />
      <div className="mt-[114px] mb-[150px] flex flex-col justify-center gap-[50px] overflow-x-auto">
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
