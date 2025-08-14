import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/shared/ui';
import { ColorPicker } from '@/shared/ui/color-picker';
import { getBanks } from '@/shared/constant/bank';

import { FormCheck } from './FormCheck';

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
  isAccount,
  isBankAccount,
  isNumber,
  value,
  onChange,
  onFileChange,
  onLocationChange,
  onColorChange,
  onCheckboxChange,
  onBankChange,
  onAccountNumberChange,
  error,
  provinces,
  cities,
  selectedProvince,
  selectedCity,
  selectedBank,
  accountNumber,
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
  isAccount?: boolean;
  isBankAccount?: boolean;
  isNumber?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onFileChange?: (file: File) => void;
  onLocationChange?: (field: 'province' | 'city', value: string) => void;
  onColorChange?: (color: string) => void;
  onCheckboxChange?: (label: string) => void;
  onBankChange?: (bank: string) => void;
  onAccountNumberChange?: (accountNumber: string) => void;
  error?: string;
  provinces?: string[];
  cities?: string[];
  selectedProvince?: string;
  selectedCity?: string;
  selectedBank?: string;
  accountNumber?: string;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(e.target.value);
  };

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 허용
    if (value === '' || /^\d+$/.test(value)) {
      onChange?.(value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileChange) {
      onFileChange(file);
    }
  };

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
            value={value || ''}
            onChange={handleInputChange}
            className={`w-full rounded-[5px] border border-solid px-[15px] py-[10px] outline-none ${
              error ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )}
      {isNumber && (
        <div className="normal flex-1">
          <input
            type="text"
            id={htmlFor}
            placeholder={placeholder}
            value={value || ''}
            onChange={handleNumberInputChange}
            className={`w-full rounded-[5px] border border-solid px-[15px] py-[10px] outline-none ${
              error ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )}
      {isImageInput && (
        <div className="file-button flex-1">
          <div id="file-area" className="hidden">
            <input type={type} onChange={handleFileChange} />
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
            value={value || ''}
            onChange={handleInputChange}
            className={`h-[80px] w-full resize-none rounded-[5px] border border-solid px-[15px] py-[10px] outline-none ${
              error ? 'border-red-500' : 'border-gray-400'
            }`}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )}
      {isCheckBox && (
        <div className="flex items-center gap-5">
          {checkContent?.map(check => (
            <FormCheck
              key={check.label}
              label={check.label}
              htmlFor={`check-${check.label}`}
              checked={check.checked}
              onChange={() => onCheckboxChange?.(check.label)}
            />
          ))}
        </div>
      )}
      {isLocation && (
        <div className="flex flex-1 items-center gap-5">
          <Select
            value={selectedProvince}
            onValueChange={value => onLocationChange?.('province', value)}
          >
            <SelectTrigger
              className={`flex-1 bg-white font-normal ${
                error ? 'border-red-500' : 'border-gray-400'
              }`}
            >
              <SelectValue placeholder="시/도를 선택해주세요." />
            </SelectTrigger>
            <SelectContent>
              {provinces?.map(province => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={selectedCity}
            onValueChange={value => onLocationChange?.('city', value)}
            disabled={!selectedProvince}
          >
            <SelectTrigger
              className={`flex-1 bg-white font-normal ${
                error ? 'border-red-500' : 'border-gray-400'
              } ${!selectedProvince ? 'opacity-50' : ''}`}
            >
              <SelectValue placeholder="구/군을 선택해주세요." />
            </SelectTrigger>
            <SelectContent>
              {cities?.map(city => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )}
      {isColor && (
        <div className="color-wrapper flex-1">
          <ColorPicker value={value || '#92B4FF'} onChange={onColorChange} />
        </div>
      )}
      {isAccount && (
        <div className="account-wrapper flex gap-2">
          <div className="normal flex-1">
            <input
              type={type}
              id={htmlFor}
              placeholder={placeholder}
              value={value || ''}
              onChange={handleInputChange}
              className={`w-full rounded-[5px] border border-solid px-[15px] py-[10px] outline-none ${
                error ? 'border-red-500' : 'border-gray-400'
              }`}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
        </div>
      )}
      {isBankAccount && (
        <div className="bank-account-wrapper flex flex-1 gap-2">
          <div className="flex-1">
            <Select
              value={selectedBank}
              onValueChange={value => onBankChange?.(value)}
            >
              <SelectTrigger
                className={`h-[42px] bg-white font-normal ${
                  error ? 'border-red-500' : 'border-gray-400'
                }`}
              >
                <SelectValue placeholder="은행을 선택해 주세요" />
              </SelectTrigger>
              <SelectContent>
                {getBanks().map(bank => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="ex)0000-000-000000"
              value={accountNumber || ''}
              onChange={e => onAccountNumberChange?.(e.target.value)}
              className={`h-[42px] w-full rounded-[5px] border border-solid px-[15px] py-[10px] outline-none ${
                error ? 'border-red-500' : 'border-gray-400'
              }`}
            />
          </div>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
};
