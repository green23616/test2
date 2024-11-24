/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.scss';

function Card({ data, setOpen, setSelectedData }) {
  console.log('Card가 렌더링 되고 있습니다.');
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

export default React.memo(Card);
