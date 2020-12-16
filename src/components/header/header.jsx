import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        오늘은?
        <span className={styles.date}>2020년 12월 16일</span>
        <span className={styles.day}>수요일</span>
      </h1>
      <input className={styles.input} type="text" placeholder="검색" />
    </header>
  );
};

export default Header;
