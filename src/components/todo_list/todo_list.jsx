import React from 'react';
import { useTodoState } from '../../todo_context';
import TodoItem from '../todo_item/todo_item';
import styles from './todo_list.module.css';

const TodoList = () => {
  const state = useTodoState();
  console.log(state);
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>
        <span className={styles.name}>12월 17일</span>
        <span className={styles.number}>(할 일 2개 남음)</span>
      </h2>
      <ul className={styles.todos}>
        <TodoItem text="할 일 1" done={true} />
        <TodoItem text="할 일 2" done={true} />
        <TodoItem text="할 일 3" done={false} />
        <TodoItem text="할 일 4" done={false} />
      </ul>
    </div>
  );
};

export default TodoList;
