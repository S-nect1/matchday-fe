import styles from './TeamInfoCard.module.scss';

const TeamInfoCard = () => {
  return (
    <div className={styles.teamInfoCardContainer}>
      <div className={styles.teamInfoCardHeader}>
        <h1 className={styles.teamInfoCardH1}>소모임</h1>
        <h2 className={styles.teamInfoCardH2}>서울특별시 강남구</h2>
      </div>
      <div className={styles.teamInfoCardContent}>
        <h3 className={styles.teamInfoCardH3}>팀 이름입니다.</h3>
        <p className={styles.teamInfoCardP}>
          팀 설명입니다.팀 설명입니다.팀 설명입니다.팀 설명입니다.팀 설명입니다.
        </p>
      </div>
      <div className={styles.uniformContainer}>
        <span>상의 유니폼</span>
        <div style={{ backgroundColor: 'rgb(249, 214, 17)' }}></div>
      </div>
    </div>
  );
};

export default TeamInfoCard;
