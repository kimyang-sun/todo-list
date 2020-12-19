import React from 'react';
import styles from './search_result.module.css';
import SearchItem from '../search_item/search_item';
import { useResultState } from '../../context/search_context';

const SearchResult = ({ searchValue, setPage, setSearch }) => {
  const results = useResultState();

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.keyword}>{`'${searchValue}'`}</span>에 대한
        검색결과
      </h2>
      <ul className={styles.results}>
        {results.map(result => (
          <SearchItem
            key={result.id}
            id={result.id}
            page={result.page}
            text={result.text}
            setPage={setPage}
            setSearch={setSearch}
          />
        ))}
      </ul>
    </section>
  );
};

export default SearchResult;
