export const NAVIGATION_ITEMS = [
  {
    id: 'match-list',
    label: '매치 리스트',
    href: '/match-list',
  },
  {
    id: 'team-search',
    label: '팀 찾기',
    href: '/teams',
  },
  {
    id: 'my-team',
    label: '마이팀',
    href: '/my-team',
  },
  {
    id: 'qna',
    label: '문의사항',
    href: '/qna',
  },
] as const;

export const AUTH_ITEMS = [
  {
    id: 'login',
    label: '로그인',
    href: '/login',
  },
  {
    id: 'register',
    label: '회원가입',
    href: '/register',
  },
] as const;
