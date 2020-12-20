import React, { useState } from 'react';
import {
  useCategoryDispatch,
  useCategoryNextId,
} from '../../context/category_context';
import styles from './category_create.module.css';

const CategoryCreate = ({ setPage }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useCategoryDispatch();
  const nextId = useCategoryNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onCreate = e => {
    if (e.key !== 'Enter') return;
    dispatch({
      type: 'CREATE',
      category: {
        id: nextId.current,
        name: value,
        active: false,
      },
    });
    dispatch({
      // 생성해주는 목록을 활성화 시켜줍니다
      type: 'ACTIVE',
      id: nextId.current,
    });
    onUpdate();
  };

  const onUpdate = () => {
    setValue('');
    setOpen(false); // 생성이 되면 생성 입력창은 닫아주고
    setPage(value); // 페이지 상태도 변경해줍니다
    nextId.current += 1;
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${open && styles.open}`}
        type="button"
        onClick={onToggle}
      >
        목록 추가
      </button>
      <input
        className={`${styles.input} ${open && styles.open}`}
        placeholder="입력 후, Enter를 누르세요"
        maxLength="10"
        onChange={onChange}
        value={value}
        onKeyPress={onCreate}
      />
    </div>
  );
};

export default React.memo(CategoryCreate);
