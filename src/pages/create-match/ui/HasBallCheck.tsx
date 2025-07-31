type Props = {
  hasBall: boolean;
  setHasBall: (value: boolean) => void;
};

export const HasBallCheck = ({ hasBall, setHasBall }: Props) => {
  return (
    <div className="flex flex-row gap-[30px]">
      <div className="flex flex-row items-center gap-[10px] text-[16px] font-medium">
        <input
          type="checkbox"
          checked={hasBall}
          onChange={() => setHasBall(true)}
          className="h-5 w-5 accent-[#0043FF]"
        />
        O
      </div>
      <div className="flex flex-row items-center gap-[10px] text-[16px] font-medium">
        <input
          type="checkbox"
          checked={!hasBall}
          onChange={() => setHasBall(false)}
          className="h-5 w-5 accent-[#0043FF]"
        />
        X
      </div>
    </div>
  );
};
