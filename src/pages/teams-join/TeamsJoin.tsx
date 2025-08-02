import { TeamJoinForm } from '@/features/team-join';

export const TeamsJoin = () => {
  return (
    <div className="teams__join min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div
        className="inner max-w-[1280px] px-4 sm:px-6 md:px-8"
        style={{ margin: '0 auto' }}
      >
        <TeamJoinForm />
      </div>
    </div>
  );
};
