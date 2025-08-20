type MatchTermsAgreementProps = {
  isAgreedToNoShowTerms: boolean;
  updateAgreement: () => void;
};

export const MatchTermsAgreement = ({
  isAgreedToNoShowTerms,
  updateAgreement,
}: MatchTermsAgreementProps) => {
  return (
    <div className="absolute right-0 bottom-18 flex flex-row items-center gap-[10px]">
      <input
        id="agreement"
        type="checkbox"
        checked={isAgreedToNoShowTerms}
        onChange={updateAgreement}
        className="h-5 w-5 accent-[#0043FF]"
        required
        onInvalid={e =>
          e.currentTarget.setCustomValidity(
            '동의를 한 후 매치를 등록할 수 있습니다.'
          )
        }
      />
      <label
        htmlFor="agreement"
        className="text-center text-[16px] font-medium"
      >
        매치 노쇼 이용약관 동의하기
      </label>
      <span className="border-b text-xs leading-[18px] text-[#BDBDBD]">
        보기
      </span>
    </div>
  );
};
