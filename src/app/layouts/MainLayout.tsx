import { Footer } from '@/widgets/footer';
import { Navbar } from '@/widgets/navbar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center">
        <main className="max-w-screen-xl flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
