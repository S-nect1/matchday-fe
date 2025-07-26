import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/widgets';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 justify-center">
        <main className="max-w-screen-xl flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
