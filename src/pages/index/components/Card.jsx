/* eslint-disable react/prop-types */
import styles from './Card.module.scss';

function Card({ data, setOpen, setSelected }) {
  const handleClick = () => {
    setOpen(true);
    setSelected(data);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={data.urls.small} className={styles.card__image} />
    </div>
  );
}

export default Card;
