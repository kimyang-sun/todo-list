import React from 'react';
import styles from './category.module.css';

const Category = () => {
  return (
    <div className={styles.box}>
      <button className={styles.button} type="button">
        목록 추가
      </button>
      <ul></ul>
    </div>
  );
};

export default Category;
