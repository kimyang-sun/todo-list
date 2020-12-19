import React from 'react';
import { useTodoState } from '../../context/todo_context';
import TodoCreate from '../todo_create/todo_create';
import TodoItem from '../todo_item/todo_item';
import styles from './todo_list.module.css';

const TodoList = ({ page }) => {
  const todos = useTodoState();
  const undoneTasks = todos
    .filter(todo => todo.page === page)
    .filter(todo => !todo.done).length;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.name}>{page ? page : '목록이 없습니다'}</span>
        <span className={styles.number}>
          {page && `할 일 ${undoneTasks}개 남음`}
        </span>
      </h2>
      <ul className={styles.todos}>
        {todos.map(todo => {
          if (todo.page === page) {
            return <TodoItem key={todo.id} todo={todo} />;
          } else {
            return false;
          }
        })}
      </ul>
      <TodoCreate page={page} />
    </section>
  );
};

export default TodoList;
