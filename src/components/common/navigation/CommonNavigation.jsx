import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Components
import styles from './CommonNavigation.module.scss';
// JSON
import navJson from './nav.json';
import { useRecoilState } from 'recoil';
import { pageState } from '@/store/atoms/pageState';
import { searchState } from '@/store/atoms/searchState';

function CommonNavigation() {
  const [navigation] = useState(() => {
    return navJson;
  });
  const location = useLocation();
  const setPage = useRecoilState(pageState);
  const setSearch = useRecoilState(searchState);

  console.log(location);

  // useEffect(() => {
  //   navigation.forEach(nav => {
  //     nav.isActive = false;

  //     if (nav.path === location.pathname) {

  //     }
  //   });
  // }, []);

  return (
    <nav className={styles.navigation}>
      {navigation.map(item => {
        return (
          <Link
            className={styles.navigation__menu}
            key={item.index}
            to={item.path}
          >
            <span className={styles.navigation__menu__label}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default CommonNavigation;
