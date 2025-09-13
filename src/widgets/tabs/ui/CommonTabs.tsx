import type { Dispatch, SetStateAction } from 'react';

export const CommonTabs = ({
  content,
  activeTabs,
  setActiveTabs,
}: {
  content: string[];
  activeTabs: string;
  setActiveTabs: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ul className="flex w-full items-center pb-2">
      {content.map((s: string) => (
        <li style={{ width: `${100 / content.length}%` }}>
          <button
            className={`w-full pb-2 ${activeTabs === s.split('/')[0] ? 'border-b border-solid border-[rgba(0,67,255,1)] text-[rgba(0,67,255,1)]' : 'border-b border-solid border-gray-300 text-gray-300'}`}
            onClick={() => {
              setActiveTabs(s.split('/')[0]);
            }}
          >
            {s.split('/')[1]}
          </button>
        </li>
      ))}
    </ul>
  );
};
