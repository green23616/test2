/* eslint-disable react/prop-types */
import styles from './Card.module.scss';

function Card({ data, setOpen, setSelectedData }) {
  const handleClick = () => {
    setOpen(true);
    setSelectedData(data);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={data.urls.small} className={styles.card__image} />
    </div>
  );
}

export default Card;
