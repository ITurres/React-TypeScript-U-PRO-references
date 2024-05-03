import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';

// * JSX.Element[] is important in order to accept multiple children.
interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    { id: '1', desc: 'todo 1', completed: true },
    { id: '2', desc: 'todo 2', completed: false },
  ],
  completed: 0,
  pending: 2,
};

const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  return (
    <TodoContext.Provider
      value={{
        todoState,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
