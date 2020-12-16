import React from 'react';
import styles from './todo_list.module.css';

const TodoList = () => {
  return (
    <div className={styles.box}>
      <p className={styles.things}>할일 2개 남음</p>
      <ul className={styles.todos}></ul>
    </div>
  );
};

export default TodoList;
