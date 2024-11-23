import { useMemo, useState } from 'react';
// Components
import Header from '@components/common/header/CommonHeader.jsx';
import Search from '@components/common/searchBar/CommonSearchBar.jsx';
import Navigation from '@/components/common/navigation/CommonNavigation.jsx';
import Footer from '@components/common/footer/CommonFooter.jsx';
import Card from './components/Card';
import DetailDialog from '@/components/common/dialog/DetailDialog';
// CSS
import styles from './styles/index.module.scss';
// Recoil
import { useRecoilState } from 'recoil';
import { searchState } from '@/store/atoms/searchState';
import { pageState } from '@/store/atoms/pageState';
// Tanstack Query
import useFetchImages from '@/hooks/useFetchImages';

function Index() {
  const [searchValue] = useRecoilState(searchState);
  const [pageValue] = useRecoilState(pageState);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  // Tanstack Query를 통한 Data fetching
  const { data, isLoading, isError, error } =
    // Custom Hook을 통한 분리
    useFetchImages(searchValue, pageValue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data: {error}</div>;
  }

  const CARD_LIST = data.map(item => (
    <Card
      data={item}
      key={item.id}
      setOpen={setOpen}
      setSelected={setSelected}
    />
  ));

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
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* FOOTER UI */}
      <Footer />
      {open && <DetailDialog data={selected} setOpen={setOpen} />}
    </div>
  );
}

export default Index;
