import React from 'react';
import { useCategoryState } from '../../category_context';
import CategoryCreate from '../category_create/category_create';
import CategoryItem from '../category_item/category_item';
import styles from './category.module.css';

const Category = ({ setPage }) => {
  const categories = useCategoryState();

  return (
    <div className={styles.box}>
      <CategoryCreate setPage={setPage} />
      <ul className={styles.categories}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            setPage={setPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default Category;
