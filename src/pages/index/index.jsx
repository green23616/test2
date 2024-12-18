import { useEffect, useState } from 'react';
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
  console.log('Index가 렌더링 되고 있습니다.');
  const [searchValue] = useRecoilState(searchState);
  const [pageValue] = useRecoilState(pageState);
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

  const CARD_LIST = data.results.map(item => (
    <Card data={item} key={item.id} setOpen={setOpen} setSelectedData={setSelectedData} />
  ));

  return (
    <div className={styles.page}>
      {/* HEADER UI */}
      <Header />
      <Navigation />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>Photosplash</span>
            <span className={styles.wrapper__desc}>
              반갑습니다 안녕하세요 잘가요 사랑해요
            </span>
            {/* SEARCH UI */}
            <Search />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* FOOTER UI */}
      <Footer />
      {open && <DetailDialog data={selectedData} setOpen={setOpen} />}
    </div>
  );
}

export default Index;
