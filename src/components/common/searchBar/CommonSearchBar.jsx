import { useState } from 'react';
import styles from './CommonSearchBar.module.scss';
import { useSetRecoilState } from 'recoil';
import { searchState } from '@/store/atoms/searchState';

function CommonSearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const setSearch = useSetRecoilState(searchState);

  const onChange = e => {
    setSearchValue(e.target.value);
  };

  const handleOnclick = () => {
    if (searchValue === '') {
      setSearch('Korea');
    } else {
      setSearch(searchValue);
    }
  };

  const handleOnkeydown = e => {
    if (e.key === 'Enter') {
      if (searchValue === '') {
        setSearch('Korea');
      } else {
        setSearch(searchValue);
      }
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="검색하소"
          className={styles.searchBar__search__input}
          onChange={onChange}
          onKeyDown={handleOnkeydown}
        />
        <img
          src="src/assets/icons/icon-search.svg"
          alt="icon"
          className={styles.searchBar__search__image}
          onClick={handleOnclick}
        />
      </div>
    </div>
  );
}

export default CommonSearchBar;
