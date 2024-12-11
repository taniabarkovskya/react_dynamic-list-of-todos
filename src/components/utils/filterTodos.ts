import { Todo } from '../../types/Todo';

export function filterTodos(todosArray: Todo[], query: string, status: string) {
  return todosArray
    .filter(todo =>
      todo.title.toLowerCase().includes(query.trim().toLowerCase()),
    )
    .filter(todo => {
      if (status === 'completed') {
        return todo.completed === true;
      }

      if (status === 'active') {
        return todo.completed === false;
      }

      return true;
    });
}
