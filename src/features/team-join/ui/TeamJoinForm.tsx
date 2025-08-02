import { useState } from 'react';
import styles from './TeamJoinForm.module.scss';
import { InputField } from '../../team-write/ui/InputField';

export const TeamJoinForm = () => {
  const [formData, setFormData] = useState({
    teamCode: '',
    uniformTopColor: '#000000', // 기본값 설정
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Team join form submitted:', formData);
  };

  return (
    <div className={styles.teamJoinForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* 팀 가입하기 */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>팀 가입하기</h2>

          {/* 팀 코드 */}
          <InputField
            label="팀 코드"
            type="text"
            name="teamCode"
            value={formData.teamCode}
            onChange={handleInputChange}
            placeholder="팀 코드를 입력해주세요"
          />

          {/* 상의 유니폼 색깔 */}
          <div className={styles.fieldGroup}>
            <label className={styles.label}>상의 유니폼 색깔</label>
            <div className={styles.colorPickerContainer}>
              <input
                type="color"
                name="uniformTopColor"
                value={formData.uniformTopColor}
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
                  style={{ backgroundColor: formData.uniformTopColor }}
                />
                <span className={styles.colorValue}>
                  {formData.uniformTopColor}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 가입 버튼 */}
        <div className={styles.submitSection}>
          <button type="submit" className={styles.submitButton}>
            팀 가입하기
          </button>
        </div>
      </form>
    </div>
  );
};
