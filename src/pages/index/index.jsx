import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// Components
import Header from '@components/common/header/CommonHeader.jsx';
import Search from '@components/common/searchBar/CommonSearchBar.jsx';
import Navigation from '@/components/common/navigation/CommonNavigation.jsx';
import Footer from '@components/common/footer/CommonFooter.jsx';
import Card from './components/Card';
// CSS
import styles from './styles/index.module.scss';
import { useRecoilState } from 'recoil';
import { searchState } from '@/store/atoms/searchState';
import { pageState } from '@/store/atoms/pageState';

function Index() {
  const [searchValue] = useRecoilState(searchState);
  const [pageValue] = useRecoilState(pageState);
  const API_URL = 'https://api.unsplash.com/search/photos';
  const API_KEY = 'pAEouZcfIjwAylXEegT3seeJ5uAtN9-lmD29z0VLQIw';
  const PER_PAGE = 30;

  // React Query를 통한 Data fetching
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['images', searchValue, pageValue], // 쿼리 키 (캐싱 및 리패칭에 사용)
    queryFn: async () => {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`,
      );
      return res.data.results;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error fetching data</div>;
  }

  const cardList = data.map(item => <Card data={item} key={item.id} />);

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
        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>
      {/* FOOTER UI */}
      <Footer />
    </div>
  );
}

export default Index;
