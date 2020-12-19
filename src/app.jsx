import styles from './app.module.css';
import Category from './components/category/category';
import Header from './components/header/header';
import TodoList from './components/todo_list/todo_list';
import { TodoProvider } from './context/todo_context';
import { CategoryProvider } from './context/category_context';
import { useState } from 'react';
import SearchResult from './components/search_result/search_result';
import { ResultProvider } from './context/search_context';

function App() {
  const [page, setPage] = useState('오늘');
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <CategoryProvider>
      <TodoProvider>
        <ResultProvider>
          <div className={styles.wrap}>
            <Header
              setSearch={setSearch}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <div className={styles.container}>
              <Category setPage={setPage} setSearch={setSearch} />
              {search ? (
                <SearchResult
                  searchValue={searchValue}
                  setPage={setPage}
                  setSearch={setSearch}
                />
              ) : (
                <TodoList page={page} />
              )}
            </div>
          </div>
        </ResultProvider>
      </TodoProvider>
    </CategoryProvider>
  );
}

export default App;
