import React from 'react';
import styles from './todo_item.module.css';
import { IoCheckmarkDoneOutline, IoTrashSharp } from 'react-icons/io5';
import { useTodoDispatch } from '../../context/todo_context';

const TodoItem = ({ todo }) => {
  const { id, text, done } = todo;
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id,
    });
  };
  const onRemove = e => {
    e.stopPropagation(); // 중첩 버블링 방지
    dispatch({
      type: 'REMOVE',
      id,
    });
  };

  return (
    <li className={styles.box} onClick={onToggle}>
      <div className={styles.content}>
        <span className={`${styles.check} ${done && styles.done}`}>
          {done && <IoCheckmarkDoneOutline size="24" color="" />}
        </span>
        <span className={`${styles.text} ${done && styles.done}`}>{text}</span>
      </div>
      <button className={styles.remove} onClick={onRemove}>
        <IoTrashSharp size="20" />
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
