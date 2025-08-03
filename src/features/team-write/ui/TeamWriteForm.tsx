import { useState } from 'react';
import styles from './TeamWriteForm.module.scss';
import { InputField } from './InputField';
import { AREA_OPTIONS, DISTRICT_OPTIONS } from '../../../shared/constant/areas';
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

  const handleSelectChange = (name: string, value: string) => {
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

  const handleTeamTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      teamType: prev.teamType === type ? '' : type, // 같은 값이면 해제, 다른 값이면 선택
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
                  className={styles.fileIcon}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className={styles.fileText}>
                  {formData.teamLogo ? (
                    <span className={styles.fileSelected}>
                      {formData.teamLogo.name}
                    </span>
                  ) : (
                    <>
                      <span className={styles.fileLink}>파일을 선택하거나</span>
                      <span className={styles.fileDrop}>
                        이곳으로 드래그해주세요
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

          {/* 팀 설명 */}
          <InputField
            label="팀 설명"
            type="textarea"
            name="introduction"
            value={formData.introduction}
            onChange={handleInputChange}
            placeholder="팀을 소개해주세요"
            rows={4}
          />

          {/* 팀 유형 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>팀 유형</label>
            <div className={styles.customCheckboxGroup}>
              {['소모임', '동아리', '동호회'].map(type => (
                <div
                  key={type}
                  className={`${styles.customCheckbox} ${formData.teamType === type ? styles.checked : ''}`}
                  onClick={() => handleTeamTypeChange(type)}
                >
                  <div className={styles.checkboxInner}>
                    {formData.teamType === type && (
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className={styles.checkboxLabel}>{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 상의 유니폼 색깔 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>상의 유니폼 색깔</label>
            <div className={styles.colorPickerContainer}>
              <input
                type="color"
                name="uniformTopColor"
                value={formData.uniformTopColor || '#000000'}
                onChange={e => {
                  setFormData(prev => ({
                    ...prev,
                    uniformTopColor: e.target.value,
                  }));
                }}
                className={styles.colorPicker}
                title="색상을 선택하세요"
              />
              <div className={styles.colorPreview}>
                <div
                  className={styles.colorSwatch}
                  style={{
                    backgroundColor: formData.uniformTopColor || '#000000',
                  }}
                />
                <span className={styles.colorValue}>
                  {formData.uniformTopColor || '#000000'}
                </span>
              </div>
            </div>
          </div>

          {/* 활동지역 - 시/도 */}
          <InputField
            label="활동지역 (시/도)"
            type="select"
            name="activityArea"
            value={formData.activityArea}
            onSelectChange={value => handleSelectChange('activityArea', value)}
            placeholder="시/도를 선택해주세요"
            options={AREA_OPTIONS}
          />

          {/* 활동지역 - 구/군 */}
          <InputField
            label="활동지역 (구/군)"
            type="select"
            name="activityDistrict"
            value={formData.activityDistrict}
            onSelectChange={value =>
              handleSelectChange('activityDistrict', value)
            }
            placeholder={
              formData.activityArea
                ? '구/군을 선택해주세요'
                : '먼저 시/도를 선택해주세요'
            }
            options={getDistrictOptions()}
          />

          {/* 멤버수 제한 */}
          <InputField
            label="멤버수 제한"
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
            onSelectChange={value => handleSelectChange('bank', value)}
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
            등록
          </button>
        </div>
      </form>
    </div>
  );
};
