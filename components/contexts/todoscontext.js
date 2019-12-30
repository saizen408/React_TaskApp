import React, { createContext, useContext } from "react";
import { useDBReducer } from "../hooks/useDBReducer";
import todoReducer from "../reducers/todoreducer";

const defaultTodos = [
  {
    _id: 1,
    description: "Mow the lawn using goats",
    completed: false,
    updatedAt: "1987-12-27T07:20:16.566Z"
  },
  {
    _id: 2,
    description: "Release lady bugs into garden",
    completed: true,
    updatedAt: "2015-12-27T07:20:16.566Z"
  }
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useDBReducer(defaultTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
