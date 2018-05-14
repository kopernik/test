import React from 'react';
import styles from './Pagination.css';

export default () => {
  return (
    <div className={styles.pagination}>
      <a href="" className={styles.item}>«</a>
      <a href="" className={[styles.item, styles.itemActive].join(' ')}>1</a>
      <a href="" className={styles.item}>2</a>
      <a href="" className={styles.item}>...</a>
      <a href="" className={styles.item}>11</a>
      <a href="" className={styles.item}>...</a>
      <a href="" className={styles.item}>34</a>
      <a href="" className={styles.item}>35</a>
      <a href="" className={styles.item}>»</a>
    </div>
  );
};