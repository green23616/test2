import styles from './CommonHeader.module.scss';

function CommonHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className={styles.header__logoBox__logo}
        />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>제출</button>
        <button className={styles.header__profileBox__button}>북마크</button>
        <span className={styles.header__profileBox__userName}>
          green23616@gmail.com
        </span>
      </div>
    </header>
  );
}

export default CommonHeader;
