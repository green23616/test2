/* eslint-disable react/prop-types */
import { useSetRecoilState } from 'recoil';
import styles from './Card.module.scss';
import { searchState } from '@/store/atoms/searchState';

function Card({ data }) {
  const setSearchValue = useSetRecoilState(searchState);

  const openDialog = () => {
    console.log(1);
    setSearchValue('japan');
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src={data.urls.small} className={styles.card__image}></img>
    </div>
  );
}

export default Card;
