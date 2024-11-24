import styles from './CommonFooter.module.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchState } from '@/store/atoms/searchState';
import { pageState } from '@/store/atoms/pageState';
import useFetchImages from '@/hooks/useFetchImages';
import React, { useState } from 'react';

function CommonFooter() {
  console.log('Footer가 렌더링 되고 있습니다.');
  const searchValue = useRecoilValue(searchState);
  const [pageValue, setPageValue] = useRecoilState(pageState);
  const [step, setStep] = useState(0);

  const { data } = useFetchImages({
    queryKey: ['images', searchValue, pageValue],
  });

  const moveToPrev = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const moveToNext = () => {
    if (step < groupedPages.length - 1) {
      setStep(prev => prev + 1);
    }
  };

  const moveToPage = selected => {
    setPageValue(selected);
  };

  const totalPages = data?.total_pages;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const groupedPages = [];
  for (let i = 0; i < pages.length; i += 10) {
    groupedPages.push(pages.slice(i, i + 10));
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button} onClick={moveToPrev}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="button__left" />
        </button>
        {groupedPages[step]?.map(item => {
          return (
            <button
              key={item}
              className={`${styles.pagination__button} ${
                item === pageValue ? styles.active : styles.inactive
              }`}
              onClick={() => moveToPage(item)}
            >
              {item}
            </button>
          );
        })}
        <button className={styles.pagination__button} onClick={moveToNext}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="button__right" />
        </button>
      </div>
    </footer>
  );
}

export default React.memo(CommonFooter);
