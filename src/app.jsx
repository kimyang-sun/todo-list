import styles from './app.module.css';
import Category from './components/category/category';
import Header from './components/header/header';
import TodoList from './components/todo_list/todo_list';
import { TodoProvider } from './todo_context';
import { CategoryProvider } from './category_context';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('오늘');

  return (
    <CategoryProvider>
      <TodoProvider>
        <div className={styles.wrap}>
          <Header />
          <div className={styles.container}>
            <Category setPage={setPage} />
            <TodoList page={page} />
          </div>
        </div>
      </TodoProvider>
    </CategoryProvider>
  );
}

export default App;
