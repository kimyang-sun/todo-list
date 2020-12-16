import { createContext, useContext, useReducer, useRef } from 'react';

// State 생성
const initialTodos = [
  {
    id: 1,
    text: '할일 1',
    done: true,
  },
  {
    id: 2,
    text: '할일 2',
    done: true,
  },
  {
    id: 3,
    text: '할일 3',
    done: false,
  },
  {
    id: 3,
    text: '할일 4',
    done: false,
  },
];

// Reducer 생성
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.todo];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

// Context API 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// Context 미리 useContext 사용하고 내보내기
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error('Cannot find TodoProvider'); // 다른곳에서 useTodoState를 사용할때 TodoProvider로 App을 감싸고 있지 않으면 오류를 보여줘야함
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw new Error('Cannot find TodoDispatch');
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) throw new Error('Cannot find TodoNextId');
  return context;
}

// Provider 생성
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
