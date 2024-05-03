// ! import { useContext } from 'react';
// ! import TodoContext from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';
import { Todo } from '../interfaces/interfaces';

// * It is a pain to always import useContext and TodoContext from the context folder.
// TODO: Use a custom hook to simplify this.

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  // ! This is the old way of using the context prior to the custom hook.  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo } = useTodos();

  const handleDbClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.desc} | {todo.completed ? 'Completed' : 'Pending'}
    </li>
  );
};

export default TodoItem;
