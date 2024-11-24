import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Components
import styles from './CommonNavigation.module.scss';
// JSON
import navJson from './nav.json';
// Recoil
import { useSetRecoilState } from 'recoil';
import { pageState } from '@/store/atoms/pageState';
import { searchState } from '@/store/atoms/searchState';

function CommonNavigation() {
  console.log('navigation이 렌더링 되고있습니다.');
  const [navigation, setNavigation] = useState(() => {
    return navJson;
  });
  const location = useLocation();
  const setPage = useSetRecoilState(pageState);
  const setSearch = useSetRecoilState(searchState);

  useEffect(() => {
    const updatedNavigation = navigation.map(nav => ({
      ...nav,
      isActive: nav.path === location.pathname || location.pathname.includes(nav.path),
    }));

    setNavigation(updatedNavigation);
    const activeNav = updatedNavigation.find(nav => nav.isActive);
    if (activeNav) {
      setSearch(activeNav.searchValue);
      setPage(1);
    }
  }, [location.pathname]);

  return (
    <nav className={styles.navigation}>
      {navigation.map(item => {
        return (
          <Link
            className={
              item.isActive
                ? `${styles.navigation__menu} ${styles.active}`
                : `${styles.navigation__menu} ${styles.inactive}`
            }
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
