import React, { useState } from 'react';
import styles from './todo_create.module.css';
import { IoAddCircleSharp } from 'react-icons/io5';
import { useTodoDispatch, useTodoNextId } from '../../context/todo_context';

const TodoCreate = ({ page }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const nextId = useTodoNextId();
  const dispatch = useTodoDispatch();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onCreate = e => {
    if (e.key !== 'Enter') return;
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        page: page,
        text: value,
        done: false,
      },
    });
    setValue('');
    setOpen(false); // 생성이 되면 입력창은 닫아줍니다.
    nextId.current += 1;
  };

  return (
    <>
      <button
        className={`${styles.button} ${open && styles.open}`}
        onClick={onToggle}
      >
        <IoAddCircleSharp size="50" />
      </button>
      <input
        className={`${styles.input} ${open && styles.open}`}
        placeholder="할 일을 입력 후, Enter를 누르세요"
        maxLength="15"
        onChange={onChange}
        value={value}
        onKeyPress={onCreate}
      />
    </>
  );
};

export default TodoCreate;
