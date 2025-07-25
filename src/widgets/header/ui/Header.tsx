import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="header__container sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div
        className="header__wrapper !flex h-[80px] max-w-[1100px] items-center px-4"
        style={{ margin: '0 auto' }}
      >
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
