import React from 'react';
import { useResultDispatch } from '../../context/search_context';
import { useTodoState } from '../../context/todo_context';
import styles from './search.module.css';

const Search = ({ setSearch, searchValue, setSearchValue }) => {
  const todos = useTodoState(); // TodoState에서 불러와야 하기때문에 불러와줍니다
  const dispatch = useResultDispatch(); // Result 디스패치를 불러옵니다.
  const searchResults = e => {
    // 결과를 처리하는 함수입니다.
    const searchString = e.trim(); // 띄어쓰기 후에 검색을 해도 검색이 되도록 합니다.
    const filtered = todos.filter(todo => todo.text.includes(searchString)); // filter를 이용하여
    if (filtered.length > 0) {
      // 검색된게 하나라도 있으면 검색을 디스패치해줍니다.
      dispatch({
        type: 'SEARCH',
        result: filtered,
      });
    } else {
      // 없으면 상태를 다시 리셋해줘야 합니다.
      dispatch({
        type: 'RESET',
      });
    }
  };

  const onChange = e => {
    setSearchValue(e.target.value);
    e.target.value === '' ? setSearch(false) : setSearch(true);
    searchResults(e.target.value);
  };

  return (
    <input
      className={styles.input}
      placeholder="검색"
      maxLength="15"
      value={searchValue}
      onChange={onChange}
    />
  );
};

export default Search;
