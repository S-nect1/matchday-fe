import { TeamWriteForm } from '@/features/team-write';

export const TeamsWrite = () => {
  return (
    <div className="teams__write flex flex-1 items-center">
      <div
        className="inner flex h-full max-w-[1280px] flex-col items-center justify-center"
        style={{ margin: '0 auto' }}
      >
        <TeamWriteForm />
      </div>
    </div>
  );
};
