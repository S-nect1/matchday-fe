import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Search, Bell } from 'lucide-react';
import { Logo } from '@/shared/ui/Logo';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const navItems = [
    { name: '매치 리스트', path: '/' },
    { name: '팀 찾기', path: '/teams' },
    { name: '마이팀', path: '/my-team' },
    { name: '문의사항', path: '/qna' },
  ];

  const isActivePath = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-25 items-center justify-between roundedmd">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo isText />
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                  isActivePath(item.path) ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
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
                  className={`hover:text-primary px-2 py-2 text-sm font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/10'
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
