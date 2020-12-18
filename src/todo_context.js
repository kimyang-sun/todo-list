import { createContext, useContext, useReducer, useRef } from 'react';

// State 생성
const initialTodos = [
  {
    id: 1,
    page: '오늘',
    text: '미용실 가기',
    done: true,
  },
  {
    id: 2,
    page: '오늘',
    text: '복권 사기',
    done: true,
  },
  {
    id: 3,
    page: '오늘',
    text: '마트 장보기',
    done: false,
  },
  {
    id: 4,
    page: '오늘',
    text: '집 청소하기',
    done: false,
  },
  {
    id: 5,
    page: '내일',
    text: '강아지 장난감 사기',
    done: false,
  },
  {
    id: 6,
    page: '내일',
    text: '공부하기',
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
    case 'ALL_REMOVE':
      return state.filter(todo => todo.page !== action.name);
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
  if (!context) throw new Error('Cannot find TodoState'); // 다른곳에서 useTodoState를 사용할때 TodoProvider로 App을 감싸고 있지 않으면 오류를 보여줘야함
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
  const nextId = useRef(parseInt(state.length + 1));
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
