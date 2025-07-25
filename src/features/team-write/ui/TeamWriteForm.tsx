import { useState } from 'react';
import styles from './TeamWriteForm.module.scss';
import { InputField } from './InputField';
import { AREA_OPTIONS, DISTRICT_OPTIONS } from '../../../shared/constant/areas';
import { UNIFORM_TOP_COLORS } from '../../../shared/constant/uniform-colors';
import { BANK_OPTIONS } from '../../../shared/constant/banks';
import type { Option } from '../../../shared/constant/areas';

export const TeamWriteForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLogo: null as File | null,
    teamMembers: [],
    teamType: '', // 팀 유형 추가
    uniformTopColor: '', // 상의 유니폼 색깔 추가
    activityArea: '',
    activityDistrict: '', // 구/군 추가
    limitedMember: '', // 멤버수 제한 추가
    teamJoinCode: '', // 가입 팀 코드 추가
    preferredTime: [] as string[],
    introduction: '',
    leaderName: '',
    phone: '',
    bank: '', // 은행 선택 추가
    accountNumber: '', // 계좌번호만 남김
  });

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // 시/도가 변경되면 구/군 초기화
    if (name === 'activityArea') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        activityDistrict: '', // 구/군 초기화
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleTimeChange = (time: string) => {
    setFormData(prev => ({
      ...prev,
      preferredTime: prev.preferredTime.includes(time)
        ? prev.preferredTime.filter(t => t !== time)
        : [...prev.preferredTime, time],
    }));
  };

  const handleTeamTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      teamType: prev.teamType === type ? '' : type, // 같은 값이면 해제, 다른 값이면 선택
    }));
  };

  const handleUniformTopColorChange = (colorId: string) => {
    setFormData(prev => ({
      ...prev,
      uniformTopColor: prev.uniformTopColor === colorId ? '' : colorId, // 같은 값이면 해제, 다른 값이면 선택
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, teamLogo: e.dataTransfer.files[0] }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, teamLogo: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // 선택된 시/도에 따른 구/군 옵션 가져오기
  const getDistrictOptions = (): Option[] => {
    if (!formData.activityArea) return [];
    return DISTRICT_OPTIONS[formData.activityArea] || [];
  };

  return (
    <div className={styles.teamWriteForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* 팀 정보 등록하기 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>팀 정보 등록하기</h2>

          {/* 팀 대표사진 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>팀 대표사진</label>
            <div
              className={`${styles.fileUpload} ${dragActive ? styles.dragActive : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
              <div className={styles.fileContent}>
                <svg
                  width="100"
                  height="69"
                  viewBox="0 0 100 69"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.fileIcon}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.5686 10.712C78.5686 16.6248 83.3628 21.4193 89.2831 21.4193C95.2033 21.4193 100 16.6248 100 10.712C100 4.79685 95.2033 0 89.2831 0C83.3652 0 78.5686 4.79447 78.5686 10.712ZM2.66088 69H95.3914C97.9266 69 98.8217 66.7229 97.3815 64.6338L63.5644 15.0045C62.1195 12.9153 59.6223 12.8178 58.0131 14.776L45.0086 30.6133C43.3946 32.5739 40.6142 32.7381 38.8265 30.9345L33.4119 25.5452C31.6241 23.7416 28.9675 24.1128 27.5083 26.1876L0.706489 64.6529C-0.755124 66.7325 0.125669 69 2.66088 69Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <div className={styles.fileText}>
                  {formData.teamLogo ? (
                    <span className={styles.fileSelected}>
                      {formData.teamLogo.name}
                    </span>
                  ) : (
                    <>
                      <span className={styles.fileDrop}>
                        500KB이하의 JPG, JPEG, PNG 파일 형식으로 등록할 수
                        있습니다.
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 팀이름 */}
          <InputField
            label="팀 이름"
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleInputChange}
            placeholder="팀 이름을 입력해주세요"
          />

          {/* 팀 소개 */}
          <InputField
            label="팀 설명"
            type="textarea"
            name="introduction"
            value={formData.introduction}
            onChange={handleInputChange}
            placeholder="팀 설명을 입력해주세요. (ex. XX 유소년 클럽입니다.)"
            rows={4}
          />

          {/* 팀 유형 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>팀 유형</label>
            <div className={styles.checkboxGroup}>
              {['소모임', '동아리', '동호회'].map(type => (
                <label key={type} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    checked={formData.teamType === type}
                    onChange={() => handleTeamTypeChange(type)}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxLabel}>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 활동지역 - 시/도 */}
          <InputField
            label="활동지역 (시/도)"
            type="select"
            name="activityArea"
            value={formData.activityArea}
            onChange={handleInputChange}
            placeholder="시/도를 선택해주세요"
            options={AREA_OPTIONS}
          />

          {/* 활동지역 - 구/군 */}
          <InputField
            label="활동지역 (구/군)"
            type="select"
            name="activityDistrict"
            value={formData.activityDistrict}
            onChange={handleInputChange}
            placeholder={
              formData.activityArea
                ? '구/군을 선택해주세요'
                : '먼저 시/도를 선택해주세요'
            }
            options={getDistrictOptions()}
          />

          {/* 상의 유니폼 색깔 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>상의 유니폼 색깔</label>
            <div className={styles.colorPalette}>
              {UNIFORM_TOP_COLORS.map(color => (
                <div
                  key={color.id}
                  className={`${styles.colorSwatch} ${color.id === 'white' ? styles.white : ''} ${formData.uniformTopColor === color.id ? styles.selected : ''}`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => handleUniformTopColorChange(color.id)}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* 멤버수 제한 */}
          <InputField
            label="멤버 수 제한"
            type="text"
            name="limitedMember"
            value={formData.limitedMember}
            onChange={handleInputChange}
            placeholder="0으로 설정할 시 제한없이 멤버 수용 가능합니다"
          />

          {/* 가입 팀 코드 설정 */}
          <InputField
            label="가입 팀 코드 설정"
            type="text"
            name="teamJoinCode"
            value={formData.teamJoinCode}
            onChange={handleInputChange}
            placeholder="팀 가입 시 필요한 코드를 설정해주세요"
          />
        </div>

        {/* 대표자 정보 등록하기 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>대표자 정보 등록하기</h2>

          {/* 이름 */}
          <InputField
            label="이름"
            type="text"
            name="leaderName"
            value={formData.leaderName}
            onChange={handleInputChange}
            placeholder="대표자 이름을 입력해주세요"
          />

          {/* 연락처 */}
          <InputField
            label="연락처"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="연락처를 입력해주세요"
          />

          {/* 은행 선택 */}
          <InputField
            label="은행"
            type="select"
            name="bank"
            value={formData.bank}
            onChange={handleInputChange}
            placeholder="은행을 선택해주세요"
            options={BANK_OPTIONS}
          />

          {/* 계좌번호 */}
          <InputField
            label="계좌번호"
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            placeholder="계좌번호를 입력해주세요"
          />
        </div>

        {/* 등록 버튼 */}
        <div className={styles.submitSection}>
          <button type="submit" className={styles.submitButton}>
            팀 만들기
          </button>
        </div>
      </form>
    </div>
  );
};
