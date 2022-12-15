import Todo, { TodoProps } from "./Todo";

export type TodoListProps = {
  todos: TodoProps[];
  onTodoToggle: (id: TodoProps["id"]) => void;
  onTodoDelete: (id: TodoProps["id"]) => void;
};

export default function TodoList({
  todos,
  onTodoToggle,
  onTodoDelete,
}: TodoListProps) {
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Completed</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            onToggle={() => onTodoToggle(todo.id)}
            onDelete={() => onTodoDelete(todo.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
