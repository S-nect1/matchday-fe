const MyTeamSubmit = ({ isMember }: { isMember: boolean }) => {
  return (
    <div className="absolute top-8 right-0 flex gap-2">
      {!isMember ? (
        <>
          <button className="w-[240px] cursor-pointer rounded-[2px] border border-solid border-white bg-[rgba(0,67,255,1)] py-1 text-[17px] text-white">
            새로운 매치 등록하기
          </button>
          <button className="w-[240px] cursor-pointer rounded-[2px] border border-solid border-white bg-white py-1 text-[17px] text-[rgba(0,67,255,1)]">
            팀 프로필 편집
          </button>
        </>
      ) : (
        <>
          <button className="w-[240px] cursor-pointer rounded-[6px] border border-solid border-white bg-[rgba(0,67,255,1)] py-1 pt-1 text-[17px] text-white">
            <span className="mt-1 block">팀 가입하기</span>
          </button>
        </>
      )}
    </div>
  );
};

export default MyTeamSubmit;
