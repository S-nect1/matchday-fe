import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="header__container sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div
        className="header__wrapper !flex h-16 max-w-[1100px] items-center px-4 sm:h-20 md:h-[80px]"
        style={{ margin: '0 auto' }}
      >
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
