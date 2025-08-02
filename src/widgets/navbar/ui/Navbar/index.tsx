import { Menu } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/Logo';

import { BellIcon } from './BellIcon';
import { SearchIcon } from './SearchIcon';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleNotificationClick = useCallback(() => {
    setHasNotification(prev => !prev);
  }, []);

  const navItems = useMemo(
    () => [
      { name: '매치 리스트', path: '/' },
      { name: '팀 찾기', path: '/teams' },
      { name: '마이팀', path: '/my-team' },
      { name: '문의사항', path: '/qna' },
    ],
    []
  );

  const isActivePath = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="roundedmd flex h-25 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo
                isIcon={true}
                isText={true}
                variant="primary"
                className="flex h-8 items-center gap-2"
              />
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative pb-2 text-lg font-medium transition-colors hover:text-blue-600 ${
                  isActivePath(item.path)
                    ? 'text-blue-600 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:translate-y-2 after:bg-blue-600 after:content-[""]'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <SearchIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNotificationClick}
            >
              <BellIcon hasNotification={hasNotification} />
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="default"
                asChild
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link to="/login">로그인</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/signup">회원가입</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-2 py-2 pb-4 text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActivePath(item.path)
                      ? 'text-blue-600 after:absolute after:right-2 after:bottom-2 after:left-2 after:h-0.5 after:bg-blue-600 after:content-[""]'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
