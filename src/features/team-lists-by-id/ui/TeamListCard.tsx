import { useState } from 'react';
import styles from './TeamListCard.module.scss';

interface TeamListCardProps {
  teamName?: string;
  teamDescription?: string;
  uniformColor?: string;
  uniformColorName?: string;
}

export const TeamListCard = ({
  teamName = '팀명',
  teamDescription = '팀 설명이 표시됩니다.',
  uniformColor = '#f59e0b',
  uniformColorName = '노랑',
}: TeamListCardProps) => {
  const [teamCode, setTeamCode] = useState('');

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamCode(e.target.value);
  };

  const handleJoinTeam = () => {
    if (teamCode.trim()) {
      console.log('팀 가입 시도:', { teamCode });
      // 팀 가입 로직 구현
    } else {
      alert('팀 코드를 입력해주세요.');
    }
  };

  return (
    <div className={styles.teamListCard}>
      {/* 팀 정보 섹션 */}
      <div className={styles.teamInfoSection}>
        <h3 className={styles.sectionTitle}>팀 정보</h3>

        {/* 팀 설명 */}
        <div className={styles.descriptionText}>
          <div className={styles.descriptionTextTitle}>
            <h2>소모임</h2>
            <span>서울 특별시 강남구</span>
          </div>
          <div className={styles.descriptionTextTeamName}>팀 이름입니다.</div>
          <div className={styles.descriptionTextTeamDescription}>
            팀 설명이 표시됩니다.
          </div>
          <div className={styles.descriptionTextUniform}>
            <span>상의 유니폼</span>
            <div
              className={styles.uniformColorBox}
              style={{ backgroundColor: uniformColor }}
            ></div>
          </div>
        </div>

        {/* 상의 유니폼 */}
        <div className={styles.uniformRow}>
          <div className={styles.uniformIcon}></div>
          <span className={styles.uniformLabel}>상의 유니폼</span>
        </div>

        {/* 상의 유니폼 색깔 */}
        <div className={styles.uniformColorRow}>
          <span className={styles.uniformColorLabel}>상의 유니폼 색깔</span>
          <div
            className={styles.uniformColorBox}
            style={{ backgroundColor: uniformColor }}
          ></div>
        </div>
      </div>

      {/* 팀 가입하기 섹션 */}
      <div className={styles.joinSection}>
        <h3 className={styles.joinTitle}>팀 가입하기</h3>

        {/* 팀 코드 입력 */}
        <div className={styles.codeInputGroup}>
          <label className={styles.codeLabel}>팀 코드</label>
          <input
            type="text"
            value={teamCode}
            onChange={handleCodeChange}
            placeholder="팀 코드를 입력해 주세요"
            className={styles.codeInput}
          />
        </div>

        {/* 가입 버튼 */}
        <button onClick={handleJoinTeam} className={styles.joinButton}>
          팀 가입하기
        </button>
      </div>
    </div>
  );
};
