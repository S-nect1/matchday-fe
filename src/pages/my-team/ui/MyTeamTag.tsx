const MyTeamTag = ({ content, star }: { content: string[]; star: number }) => {
  return (
    <div className="tag-wrapper mt-[1rem] mb-[30px] flex items-center gap-2">
      <div className="my-team-tag flex gap-3">
        {content.map((c: string) => (
          <div className="rounded-full bg-white px-3 py-1">{c}</div>
        ))}
      </div>
      <div className="star-level flex items-center gap-1">
        {new Array(5).fill(0).map((_, i: number) => (
          <span
            className={`block h-[16px] w-[16px] ${i >= star ? 'opacity-50' : ''}`}
            style={{
              background: `url('/images/banners/star-fill.png') no-repeat`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MyTeamTag;
