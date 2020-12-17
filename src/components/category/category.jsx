import React from 'react';
import CategoryItem from '../category_item/category_item';
import styles from './category.module.css';

const Category = () => {
  return (
    <div className={styles.box}>
      <button className={styles.button} type="button">
        목록 추가
      </button>
      <ul className={styles.categories}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </div>
  );
};

export default Category;
