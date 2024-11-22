/* eslint-disable react/prop-types */
import styles from './Card.module.scss';

function Card({ data }) {
  const openDialog = () => {
    console.log(1);
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src={data.urls.small} className={styles.card__image}></img>
    </div>
  );
}

export default Card;
