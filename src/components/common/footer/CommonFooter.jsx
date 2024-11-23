import styles from './CommonFooter.module.scss';

function CommonFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="button__left" />
        </button>
        <span>1</span>
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="button__right" />
        </button>
      </div>
    </footer>
  );
}

export default CommonFooter;
