import React from 'react';
import styles from './category_item.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';

const CategoryItem = () => {
  return (
    <li className={styles.container}>
      <span>목록</span>
      <IoCloseCircleOutline className={styles.remove} size="22" />
    </li>
  );
};

export default CategoryItem;
