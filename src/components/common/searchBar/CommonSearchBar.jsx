import styles from './CommonSearchBar.module.scss';

function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="검색하소"
          className={styles.searchBar__search__input}
        />
        <img
          src="src/assets/icons/icon-search.svg"
          alt="icon"
          className={styles.searchBar__search__image}
        />
      </div>
    </div>
  );
}

export default CommonSearchBar;
