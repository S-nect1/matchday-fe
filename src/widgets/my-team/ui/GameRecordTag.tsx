export const GameRecordTag = ({
  tag1,
  tag2,
}: {
  tag1: string;
  tag2: string;
}) => {
  return (
    <div className="tagBox box-shadow-md flex h-[70px] w-[116px] justify-between bg-white p-[15px]">
      <span className="self-start">{tag1}</span>
      <span className="self-end text-[18px] font-bold text-[rgba(0,67,255,1)]">
        {tag2}
      </span>
    </div>
  );
};
