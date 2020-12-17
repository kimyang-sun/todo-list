import React, { useState } from 'react';
import styles from './todo_add.module.css';
import { IoAddCircleSharp } from 'react-icons/io5';

const TodoAdd = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      <button
        className={`${styles.addButton} ${open && styles.open}`}
        onClick={onToggle}
      >
        <IoAddCircleSharp size="46" />
      </button>
      <input
        className={`${styles.addInput} ${open && styles.open}`}
        type="text"
        placeholder="할 일을 입력 후, Enter를 누르세요"
      />
    </>
  );
};

export default TodoAdd;
