import { createContext, useContext, useReducer } from 'react';

// State 생성
const initialSearchResults = [];

// Reducer 생성
function resultReducer(state, action) {
  switch (action.type) {
    case 'SEARCH':
      return [...action.result];
    case 'RESET':
      return [];
    default:
      throw new Error(`Invaild action type ${action.type}`);
  }
}
// Context API 생성
const ResultStateContext = createContext();
const ResultDispatchContext = createContext();

// Context 미리 useContext 사용하고 내보내기
export function useResultState() {
  const context = useContext(ResultStateContext);
  if (!context) throw new Error('Cannot find ResultState');
  return context;
}

export function useResultDispatch() {
  const context = useContext(ResultDispatchContext);
  if (!context) throw new Error('Cannot find ResultDispatch');
  return context;
}

// Provider 생성
export function ResultProvider({ children }) {
  const [state, dispatch] = useReducer(resultReducer, initialSearchResults);
  return (
    <ResultStateContext.Provider value={state}>
      <ResultDispatchContext.Provider value={dispatch}>
        {children}
      </ResultDispatchContext.Provider>
    </ResultStateContext.Provider>
  );
}
