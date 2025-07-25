import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../../shared/constant/navigation';

export const Navigation = () => {
  return (
    <nav className="!ml-[80px] !flex items-center gap-3">
      {/* 메인 네비게이션 */}
      <ul className="!flex items-center gap-6">
        {NAVIGATION_ITEMS.map(item => (
          <li key={item.id}>
            <Link
              to={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              style={{ padding: '0 20px' }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* 검색 아이콘 */}
      <button
        className="rounded-md p-1 transition-colors hover:bg-gray-100"
        aria-label="검색"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 알림 아이콘 */}
      <button
        className="rounded-md p-2 transition-colors hover:bg-gray-100"
        aria-label="알림"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 인증 관련 버튼 */}
      <div className="!flex items-center gap-3">
        <Link
          to="/login"
          className="!px-5 !py-3 !pt-[16px] text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
        >
          로그인
        </Link>
        <Link
          to="/register"
          className="rounded-md bg-blue-600 !px-5 !py-3 !pt-[16px] text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          회원가입
        </Link>
      </div>
    </nav>
  );
};
