import { useEffect, useState } from 'react';
import type { TeamFormData } from '@/shared/hooks/use-team-form';

export interface TeamInfo {
  id: string;
  teamName: string;
  teamDescription: string;
  teamType: TeamFormData['teamType'];
  location: TeamFormData['location'];
  uniformColor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'LEADER' | 'MANAGER' | 'MEMBER';
}

interface UseMyTeamState {
  isMember: boolean;
  team: TeamInfo | null;
  members: TeamMember[];
  isLoading: boolean;
  error: string | null;
}

export const useMyTeam = (): UseMyTeamState => {
  const [state, setState] = useState<UseMyTeamState>({
    isMember: false,
    team: null,
    members: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    const fetchMyTeam = async () => {
      try {
        // TODO: 실제 API로 교체: GET /api/me/team
        // 데모용 가짜 데이터
        const mockIsMember = false; // 가입 여부 (임시)

        if (!mockIsMember) {
          if (!isMounted) return;
          setState(prev => ({
            ...prev,
            isMember: false,
            team: null,
            members: [],
            isLoading: false,
          }));
          return;
        }

        const mockTeam: TeamInfo = {
          id: 'team_1',
          teamName: '매치데이 FC',
          teamDescription: '즐겁게 축구하는 동호회입니다.',
          teamType: '동호회',
          location: { province: '서울특별시', city: '강남구' },
          uniformColor: '#92B4FF',
        };

        const mockMembers: TeamMember[] = [
          { id: 'u1', name: '홍길동', role: 'LEADER' },
          { id: 'u2', name: '김철수', role: 'MEMBER' },
          { id: 'u3', name: '이영희', role: 'MEMBER' },
        ];

        if (!isMounted) return;
        setState({
          isMember: true,
          team: mockTeam,
          members: mockMembers,
          isLoading: false,
          error: null,
        });
      } catch (e) {
        if (!isMounted) return;
        const message =
          e instanceof Error ? e.message : '내 팀 정보를 불러오지 못했습니다.';
        setState(prev => ({ ...prev, isLoading: false, error: message }));
      }
    };

    fetchMyTeam();
    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};
