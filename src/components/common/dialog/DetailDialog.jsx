/* eslint-disable react/prop-types */
import React from 'react';
import styles from './DetailDialog.module.scss';
function DetailDialog({ data, setOpen }) {
  console.log('Dialog가 렌더링 되고 있습니다.');
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 28 + 'px' }}
                onClick={() => setOpen(false)}
              >
                close
              </span>
            </button>
            <img
              src={data.user.profile_image.small}
              alt="profile__img"
              className={styles.close__authorImage}
            />
            <span className={styles.close__authorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark__button}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 + 'px' }}>
                favorite
              </span>
              북마크
            </button>
            <button className={styles.bookmark__button}>다운로드</button>
          </div>
        </div>
        <div className={styles.container__dialog__body}>
          <img src={data.urls.small} alt="main__img" className={styles.image} />
        </div>
        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>이미지 크기</span>
              <span className={styles.infoBox__item__value}>
                {data.width} x {data.height}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>업로드</span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split('T')[0]}
              </span>
            </div>{' '}
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>마지막 업데이트</span>
              <span className={styles.infoBox__item__value}>
                {data.created_at.split('T')[0]}
              </span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>다운로드 수</span>
              <span className={styles.infoBox__item__value}>{data.likes}</span>
            </div>
          </div>
          <div className={styles.tagBox}>
            <div className={styles.tagBox__tag}>Tag Data</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DetailDialog);
