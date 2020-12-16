import styles from './app.module.css';
import Category from './components/category/category';
import Header from './components/header/header';
import TodoList from './components/todo_list/todo_list';
import { TodoProvider } from './todo_context';

function App() {
  return (
    <TodoProvider>
      <div className={styles.wrap}>
        <Header />
        <div className={styles.container}>
          <Category />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
