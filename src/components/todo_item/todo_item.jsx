import React from 'react';
import styles from './todo_item.module.css';
import { IoCheckmarkDoneOutline, IoTrashSharp } from 'react-icons/io5';

const TodoItem = ({ text, done }) => {
  return (
    <li className={styles.container}>
      <div className={styles.content}>
        <span className={`${styles.check} ${done && styles.done}`}>
          {done && <IoCheckmarkDoneOutline size="24" color="" />}
        </span>
        <span className={`${styles.text} ${done && styles.done}`}>{text}</span>
      </div>
      <button className={styles.remove} type="button">
        <IoTrashSharp size="20" />
      </button>
    </li>
  );
};

export default TodoItem;
