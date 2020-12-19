import React from 'react';
import {
  useCategoryDispatch,
  useCategoryState,
} from '../../context/category_context';
import styles from './search_item.module.css';

const SearchItem = ({ page, text, setPage, setSearch }) => {
  const categories = useCategoryState();
  const dispatch = useCategoryDispatch();

  const onClick = e => {
    const clicked = categories.filter(category => category.name === page)[0];
    setPage(clicked.name); // 페이지 상태를 변경해줍니다 (클릭된 카테고리의 name값으로)
    setSearch(false); // 검색도중 페이지 버튼을 누르면 검색상태가 취소되고 할 일들이 나와야 한다.
    dispatch({
      type: 'ACTIVE',
      id: clicked.id,
    });
  };

  return (
    <li className={styles.result} onClick={onClick}>
      <span className={styles.category}>{page}</span>
      <p className={styles.content}>{text}</p>
    </li>
  );
};

export default SearchItem;
