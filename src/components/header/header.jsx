import React from 'react';
import Search from '../search/search';
import styles from './header.module.css';

const Header = ({ setSearch, searchValue, setSearchValue }) => {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        오늘은?
        <span className={styles.date}>{dateString}</span>
        <span className={styles.day}>{dayName}</span>
      </h1>
      <Search
        setSearch={setSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </header>
  );
};

export default Header;
