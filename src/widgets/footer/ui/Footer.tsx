import { Logo } from '@/shared/ui/Logo';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#212121] text-[#BDBDBD]">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 text-center md:mb-0 md:text-left">
            <Link
              to="/"
              className="mb-4 flex items-center justify-center md:justify-start"
            >
              <Logo
                isIcon={false}
                isText={true}
                variant="footer"
                className="flex h-8 items-center"
              />
            </Link>
            <div className="space-y-1 text-sm">
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
              className="text-sm font-bold transition-colors hover:text-white"
            >
              개인정보처리방침
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm">
          <p>Copyright 2025. 매치데이. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
