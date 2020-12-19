import React from 'react';
import { useCategoryState } from '../../context/category_context';
import CategoryCreate from '../category_create/category_create';
import CategoryItem from '../category_item/category_item';
import styles from './category.module.css';

const Category = ({ setPage, setSearch }) => {
  const categories = useCategoryState();

  return (
    <section className={styles.container}>
      <CategoryCreate setPage={setPage} />
      <ul className={styles.categories}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            category={category}
            setPage={setPage}
            setSearch={setSearch}
          />
        ))}
      </ul>
    </section>
  );
};

export default Category;
