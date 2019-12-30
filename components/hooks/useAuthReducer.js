import { useReducer } from 'react';

function useAuthReducer(authReducer, token) {
  const [state, authenticate] = useReducer(authReducer, token);

  return [state, authenticate];
}

export { useAuthReducer };
