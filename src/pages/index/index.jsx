import styles from './styles/index.module.scss';
import Header from '@components/common/header/CommonHeader.jsx';
import Search from '@components/common/searchBar/CommonSearchBar.jsx';
import Navigation from '@/components/common/navigation/CommonNavigation.jsx';

function index() {
  return (
    <div className={styles.page}>
      {/* HEADER UI */}
      <Header />
      <Navigation />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>
              안녕하세요, 나는 개발자 Jw이다
            </span>
            <span className={styles.wrapper__desc}>
              개발 좋아하고 배우면 재미있다. 가족 건강이 제일 중요하고 현재
              취미라고 할만한건 딱히 없다고 말할수있다.
            </span>
            {/* SEARCH UI */}
            <Search />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
      </div>
      {/* FOOTER UI */}
    </div>
  );
}

export default index;
