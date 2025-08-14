import React, { useState } from 'react';

interface Member {
  id: number;
  name: string;
  backNumber: string;
  birthDate: string;
  mainPosition: string;
  subPosition: string;
  dominantFoot: string;
  role: string;
  isSelected: boolean;
}

export const MemberManagementTab: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: '000',
      backNumber: '000',
      birthDate: '1997.03.20',
      mainPosition: '000',
      subPosition: '000',
      dominantFoot: '오른발',
      role: '000',
      isSelected: true,
    },
    {
      id: 2,
      name: '000',
      backNumber: '000',
      birthDate: '1997.03.20',
      mainPosition: '000',
      subPosition: '000',
      dominantFoot: '오른발',
      role: '000',
      isSelected: true,
    },
    {
      id: 3,
      name: '000',
      backNumber: '000',
      birthDate: '1997.03.20',
      mainPosition: '000',
      subPosition: '000',
      dominantFoot: '오른발',
      role: '000',
      isSelected: false,
    },
    {
      id: 4,
      name: '000',
      backNumber: '000',
      birthDate: '1997.03.20',
      mainPosition: '000',
      subPosition: '000',
      dominantFoot: '오른발',
      role: '000',
      isSelected: false,
    },
    {
      id: 5,
      name: '000',
      backNumber: '000',
      birthDate: '1997.03.20',
      mainPosition: '000',
      subPosition: '000',
      dominantFoot: '오른발',
      role: '000',
      isSelected: false,
    },
    {
      id: 6,
      name: '000',
      backNumber: '000',
      birthDate: '1997.03.20',
      mainPosition: '000',
      subPosition: '000',
      dominantFoot: '오른발',
      role: '000',
      isSelected: false,
    },
  ]);

  const handleCheckboxChange = (id: number) => {
    setMembers(prev =>
      prev.map(member =>
        member.id === id
          ? { ...member, isSelected: !member.isSelected }
          : member
      )
    );
  };

  const handleRelease = () => {
    const selectedMembers = members.filter(member => member.isSelected);
    if (selectedMembers.length > 0) {
      // 방출 로직 구현
      console.log('방출할 멤버:', selectedMembers);
    }
  };

  return (
    <div className="mt-6">
      {/* Table Container */}
      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  프로필 사진
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  이름
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  등번호
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  생년월일
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  주포지션
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  부포지션
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  주발
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  역할
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                  방출
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">
                    <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.backNumber}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.birthDate}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.mainPosition}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.subPosition}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.dominantFoot}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {member.role}
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={member.isSelected}
                      onChange={() => handleCheckboxChange(member.id)}
                      className="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Release Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleRelease}
          className="rounded-md border border-red-500 bg-white px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
        >
          방출하기
        </button>
      </div>
    </div>
  );
};
