import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '@/widgets';
import backgroundImage from './assets/background.png';

export const MainLayout = () => {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
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
