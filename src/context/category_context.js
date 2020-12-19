import { createContext, useContext, useReducer, useRef } from 'react';

// State 생성
const initialCategories = [
  {
    id: 1,
    name: '오늘',
    active: true,
  },
  {
    id: 2,
    name: '내일',
    active: false,
  },
];

// Reducer 생성
function categoryReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.category];
    case 'ACTIVE':
      return state.map(category =>
        category.id === action.id
          ? { ...category, active: true }
          : { ...category, active: false }
      );
    case 'REMOVE':
      return state.filter(category => category.id !== action.id);
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
}

// Context API 생성
const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();
const CategoryNextIdContext = createContext();

// Context 미리 useContext 사용하고 내보내기
export function useCategoryState() {
  const context = useContext(CategoryStateContext);
  if (!context) throw new Error('Cannot find CategoryState'); // 다른곳에서 useCategoryState를 사용할때 CategoryProvider로 App을 감싸고 있지 않으면 오류를 보여줘야함
  return context;
}

export function useCategoryDispatch() {
  const context = useContext(CategoryDispatchContext);
  if (!context) throw new Error('Cannot find CategoryDispatch');
  return context;
}

export function useCategoryNextId() {
  const context = useContext(CategoryNextIdContext);
  if (!context) throw new Error('Cannot find CategoryNextId');
  return context;
}

// Provider 생성
export function CategoryProvider({ children }) {
  const [state, dispatch] = useReducer(categoryReducer, initialCategories);
  const nextId = useRef(parseInt(state.length + 1));
  return (
    <CategoryStateContext.Provider value={state}>
      <CategoryDispatchContext.Provider value={dispatch}>
        <CategoryNextIdContext.Provider value={nextId}>
          {children}
        </CategoryNextIdContext.Provider>
      </CategoryDispatchContext.Provider>
    </CategoryStateContext.Provider>
  );
}
