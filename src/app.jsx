import styles from './app.module.css';
import Category from './components/category/category';
import Header from './components/header/header';
import TodoList from './components/todo_list/todo_list';

function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <Category />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
