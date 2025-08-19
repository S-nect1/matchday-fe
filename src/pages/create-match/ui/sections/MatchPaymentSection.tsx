import { CustomSelect } from '@/widgets';

import { banks, Input } from '@/shared';

import type { CreateMatchForm } from '../../model';

interface MatchPaymentSectionProps {
  payment: {
    rentalFee?: number;
    bank: string;
    accountNumber?: string;
  };
  updatePayment: (updates: Partial<CreateMatchForm['payment']>) => void;
}

export const MatchPaymentSection = ({
  payment,
  updatePayment,
}: MatchPaymentSectionProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="rental-fee" className="w-50 text-lg font-bold">
          대관료<span className="text-[#ff4e3e]">*</span>
        </label>
        <div className="flex w-210 flex-row items-center gap-[10px] text-lg font-medium">
          <Input
            id="rental-fee"
            type="number"
            className="h-[45px]"
            value={payment.rentalFee}
            onChange={e => updatePayment({ rentalFee: Number(e.target.value) })}
            placeholder="대관비 총액을 입력해주세요. 매칭 확정 후 절반이 입금됩니다."
          />
          원
        </div>
      </div>
      <div className="flex flex-row items-center gap-[30px]">
        <label htmlFor="bank-select" className="w-50 text-lg font-bold">
          계좌번호<span className="text-[#ff4e3e]">*</span>
        </label>
        <div className="flex w-210 flex-row gap-[15px]">
          <CustomSelect
            value={payment.bank}
            placeholder="은행을 선택해 주세요."
            options={banks}
            onChange={selectedBank => updatePayment({ bank: selectedBank })}
          />
          <Input
            id="account-number"
            className="h-[45px]"
            value={payment.accountNumber}
            onChange={e => updatePayment({ accountNumber: e.target.value })}
            placeholder="대관비 입금용 ex)0000-000-000000"
            aria-label="계좌번호"
          />
        </div>
      </div>
    </>
  );
};
