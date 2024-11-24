import { useNavigate } from 'react-router-dom';
import styles from './CommonHeader.module.scss';
import { useSetRecoilState } from 'recoil';
import { searchState } from '@/store/atoms/searchState';

function CommonHeader() {
  console.log('Header가 렌더링 되고 있습니다.');

  const navigate = useNavigate();
  const setSearch = useSetRecoilState(searchState);

  const handleClick = () => {
    navigate('/');
    setSearch('China');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox} onClick={handleClick}>
        <img
          src="src/assets/images/image-logo.png"
          alt="logo"
          className={styles.header__logoBox__logo}
        />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>제출</button>
        <button className={styles.header__profileBox__button}>북마크</button>
        <span className={styles.header__profileBox__userName}>green23616@gmail.com</span>
      </div>
    </header>
  );
}

export default CommonHeader;
