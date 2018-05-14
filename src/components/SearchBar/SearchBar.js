import React from 'react';
import styles from './SearchBar.css';

export default ({ term, data, update }) => {
  return (
    <div className={styles.search}>
      <input type="text"  placeholder="Начинайте вводить номер" className={styles.searchInput}/>
    </div>
  );
};