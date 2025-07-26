import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUp, Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from '@/shared/ui/Logo';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 text-center md:mb-0 md:text-left">
            <Link
              to="/"
              className="mb-4 flex items-center justify-center space-x-2 md:justify-start"
            >
              <Logo isText />
              <span className="text-2xl font-bold text-white">MATCH DAY</span>
            </Link>
            <div className="text-sm space-y-1">
              <p>
                <span className="font-bold">주소</span>: 서울시 강남구 OOO |
                대표: OOO | 사업자등록번호: 123-12-12345
              </p>
              <p>
                <span className="font-bold">전화번호</span>: 010-0000-0000 |
                팩스: 010-0000-0000 | 이메일: ABC123@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/terms"
              className="text-sm transition-colors hover:text-white"
            >
              이용약관
            </Link>
            <Link
              to="/privacy"
              className="text-sm font-bold text-white transition-colors hover:text-gray-300"
            >
              개인정보처리방침
            </Link>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline" size="icon" onClick={handleScrollToTop}>
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-6 text-sm text-center border-t border-gray-800">
          <p>Copyright 2025. 매치데이. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
