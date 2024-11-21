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
        <img src="https://via.placeholder.com/30" alt="icon" />
      </div>
    </div>
  );
}

export default CommonSearchBar;
