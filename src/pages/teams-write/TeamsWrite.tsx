import { TeamWriteForm } from '@/features/team-write';

export const TeamsWrite = () => {
  return (
    <div className="teams__write min-h-screen bg-gray-50 py-8">
      <div className="inner max-w-[1280px] px-4" style={{ margin: '0 auto' }}>
        <TeamWriteForm />
      </div>
    </div>
  );
};
