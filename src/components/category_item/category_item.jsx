import React from 'react';
import styles from './category_item.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useCategoryDispatch, useCategoryState } from '../../category_context';
import { useTodoDispatch } from '../../todo_context';

const CategoryItem = ({ category, setPage }) => {
  const { id, name, active } = category;
  const categories = useCategoryState();
  const dispatch = useCategoryDispatch();
  const todoDispatch = useTodoDispatch();

  // 카테고리 클릭
  const onActive = () => {
    setPage(name); // 페이지 상태를 변경해줍니다 (클릭된 카테고리의 name값으로)
    dispatch({
      type: 'ACTIVE',
      id,
    });
  };
  // 카테고리 삭제
  const OnRemove = e => {
    e.stopPropagation(); // 중첩 버블링 방지
    dispatch({
      type: 'REMOVE',
      id,
    });
    todoDispatch({
      // 해당 카테고리에 속한 Todo도 삭제해야함
      type: 'ALL_REMOVE',
      name,
    });
    const rest = categories.filter(category => category.id !== id); // 카테고리 상태를 불러와 현재 카테고리 id와 다른 카테고리들을 필터함.
    // 만약 현재 카테고리를 제외한 나머지 카테고리들이 남아있으면 ACITVE를 디스패치 해줍니다.
    if (rest.length !== 0) {
      dispatch({
        type: 'ACTIVE',
        id: rest[0].id, // 나머지중에 첫번째 카테고리를 active 해줍니다.
      });
      setPage(rest[0].name); // 페이지 상태도 나머지중에 첫번째 카테고리로 바꿔줍니다.
    } else {
      setPage(null);
    }
  };

  return (
    <li
      className={`${styles.container} ${active && styles.active}`}
      onClick={onActive}
    >
      <span>{name}</span>
      {active && (
        <IoCloseCircleOutline
          className={styles.remove}
          size="22"
          onClick={OnRemove}
        />
      )}
    </li>
  );
};

export default CategoryItem;
