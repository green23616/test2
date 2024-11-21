import { useState } from 'react';
import styles from './CommonNavigation.module.scss';
import navJson from './nav.json';
import { Link } from 'react-router-dom';

function CommonNavigation() {
  const [navigation] = useState(() => {
    return navJson;
  });

  return (
    <div className={styles.navigation}>
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
    </div>
  );
}

export default CommonNavigation;
