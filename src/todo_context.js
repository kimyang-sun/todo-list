import { createContext, useReducer } from 'react';

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

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
