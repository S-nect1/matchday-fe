import { useState, useEffect } from 'react';
import { Button } from '@/shared';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ease-in-out ${
        isScrolled
          ? 'border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-white'
      } `}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 영역 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-primary text-2xl font-bold">Match Day</h1>
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="/"
              className="hover:text-primary font-medium text-gray-700 transition-colors duration-200"
            >
              매치 리스트
            </a>
            <a
              href="/matches"
              className="hover:text-primary font-medium text-gray-700 transition-colors duration-200"
            >
              팀 찾기
            </a>
            <a
              href="/create-match"
              className="hover:text-primary font-medium text-gray-700 transition-colors duration-200"
            >
              마이팀
            </a>
            <a
              href="/teams"
              className="hover:text-primary font-medium text-gray-700 transition-colors duration-200"
            >
              문의사항
            </a>
          </nav>

          {/* 사용자 메뉴 */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              로그인
            </Button>
            <Button className="bg-primary hover:bg-primary/90">회원가입</Button>

            {/* 모바일 메뉴 버튼 */}
            <button className="focus:ring-primary rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:outline-none focus:ring-inset md:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 (간단한 버전) */}
      <div className="border-t border-gray-200 bg-white md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="/"
            className="hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            홈
          </a>
          <a
            href="/matches"
            className="hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            매치 찾기
          </a>
          <a
            href="/create-match"
            className="hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            매치 만들기
          </a>
          <a
            href="/teams"
            className="hover:text-primary block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            팀 관리
          </a>
        </div>
      </div>
    </header>
  );
};
