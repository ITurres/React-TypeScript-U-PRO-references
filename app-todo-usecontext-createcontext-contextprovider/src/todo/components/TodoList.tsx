// ! import { useContext } from 'react';
// ! import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';
import { useTodos } from '../hooks/useTodos';

const TodoList = () => {
  // ! This is the old way of using the context.
  // const { todoState } = useContext(TodoContext);
  // const { todos } = todoState;

  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
