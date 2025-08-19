import { BinaryRadioGroup, CustomColorPicker } from '@/shared';

import type { CreateMatchForm } from '../../model';

interface MatchOptionsSectionProps {
  options: {
    uniformColor: string;
    hasBall: boolean;
  };
  updateOptions: (updates: Partial<CreateMatchForm['options']>) => void;
}

export const MatchOptionsSection = ({
  options,
  updateOptions,
}: MatchOptionsSectionProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="uniform-color" className="w-50 text-lg font-bold">
          상의 유니폼 색깔<span className="text-[#ff4e3e]">*</span>
        </label>
        <div className="flex flex-row items-center gap-[10px]">
          <CustomColorPicker
            uniformColor={options.uniformColor}
            setUniformColor={selectedColor =>
              updateOptions({ uniformColor: selectedColor })
            }
          />
          <span className="text-[16px] text-[#bdbdbd]">
            색깔을 선택해 주세요.
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="has-ball" className="w-50 text-lg font-bold">
          공 보유 유무<span className="text-[#ff4e3e]">*</span>
        </label>
        <BinaryRadioGroup
          value={options.hasBall}
          onChange={v => updateOptions({ hasBall: v })}
        />
      </div>
    </>
  );
};
