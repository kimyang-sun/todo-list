import React from 'react';
import { useTodoState } from '../../todo_context';
import TodoAdd from '../todo_add/todo_add';
import TodoItem from '../todo_item/todo_item';
import styles from './todo_list.module.css';

const TodoList = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done).length;

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>
        <span className={styles.name}>12월 17일</span>
        <span className={styles.number}>{`할 일 ${undoneTasks}개 남음`}</span>
      </h2>
      <ul className={styles.todos}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))}
      </ul>
      <TodoAdd />
    </div>
  );
};

export default TodoList;
