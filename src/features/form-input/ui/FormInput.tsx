import { FormCheck } from './FormCheck';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/shared/ui';

export const FormInput = ({
  htmlFor,
  label,
  isImageInput,
  isNormal,
  isMust,
  isTextArea,
  type,
  placeholder,
  isCheckBox,
  checkContent,
  isLocation,
  isColor,
}: {
  htmlFor?: string;
  label: string;
  isImageInput?: boolean;
  isNormal?: boolean;
  isMust?: boolean;
  isTextArea?: boolean;
  type?: string;
  placeholder?: string;
  isCheckBox?: boolean;
  checkContent?: { label: string; checked: boolean }[];
  isLocation?: boolean;
  isColor?: boolean;
}) => {
  return (
    <div className="mt-[20px] flex w-full">
      <label htmlFor={htmlFor} className="w-[230px] text-[1.1rem] font-[700]">
        {label}
        {isMust && <span className="text-[rgb(255,78,62)]">*</span>}
      </label>
      {isNormal && (
        <div className="normal flex-1">
          <input
            type={type}
            id={htmlFor}
            placeholder={placeholder}
            className="w-full rounded-[5px] border border-solid border-gray-400 px-[15px] py-[10px] outline-none"
          />
        </div>
      )}
      {isImageInput && (
        <div className="file-button flex-1">
          <div id="file-area" className="hidden">
            <input type={type} />
          </div>
          <div className="image-area flex h-[295px] w-[590px] flex-col items-center justify-center gap-5 border border-dashed border-gray-400 text-[rgb(117,117,117)]">
            <img src="/image.svg" alt="image-icon" />
            <span>
              500KB 이하의 JPG, JPEG, PNG 파일 형식으로 등록할 수 있습니다.
            </span>
          </div>
          <div className="file-real mt-[1rem]">
            <button
              type="button"
              className="flex w-[590px] items-center justify-center gap-2 rounded-[5px] border border-solid border-[rgb(0,67,255)] py-[13px] before:block before:h-[30px] before:w-[30px] before:bg-[url('/camera.svg')] before:bg-no-repeat before:content-['']"
            >
              대표사진을 등록해주세요.
            </button>
          </div>
        </div>
      )}
      {isTextArea && (
        <div className="text-area w-full flex-1">
          <textarea
            id={htmlFor}
            placeholder={placeholder}
            className="h-[80px] w-full resize-none rounded-[5px] border border-solid border-gray-400 px-[15px] py-[10px] outline-none"
          />
        </div>
      )}
      {isCheckBox && (
        <div className="flex items-center gap-5">
          {checkContent?.map(check => (
            <FormCheck
              label={check.label}
              htmlFor={`check-${check.label}`}
              checked={check.checked}
            />
          ))}
        </div>
      )}
      {isLocation && (
        <div className="flex flex-1 items-center gap-5">
          <Select>
            <SelectTrigger className="flex-1 bg-white font-normal text-gray-400">
              <SelectValue placeholder="시/도를 선택해주세요." />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="flex-1 bg-white font-normal text-gray-400">
              <SelectValue placeholder="구/군을 선택해주세요." />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
      )}
      {isColor && (
        <div className="color-wrapper">
          <div
            className="color h-[36px] w-[36px] rounded-[3px]"
            style={{ backgroundColor: 'rgb(146,180,255)' }}
          ></div>
        </div>
      )}
    </div>
  );
};
