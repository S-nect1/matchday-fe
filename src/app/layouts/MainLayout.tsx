import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/widgets';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F8F8]">
      <Header />
      <div className="flex min-w-[1270px] flex-col justify-center gap-[50px] overflow-x-auto">
        <main className="flex">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
