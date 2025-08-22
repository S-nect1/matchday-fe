export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'home',
    label: '홈',
    href: '/',
  },
  {
    id: 'matches',
    label: '매치',
    href: '/matches',
  },
  {
    id: 'teams',
    label: '팀',
    href: '/teams',
  },
  {
    id: 'players',
    label: '선수',
    href: '/players',
  },
];
