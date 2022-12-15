import { useState } from "react";
import { TodoProps } from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  function addTodo(name: string) {
    setTodos((prev) => [
      ...prev,

      {
        id: Date.now(),
        name: name,
        completed: false,
        onToggle: () => toggleTodo,
        onDelete: () => deleteTodo,
      },
    ]);
  }

  function toggleTodo(id: TodoProps["id"]) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id: TodoProps["id"]) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="todo-container">
      <TodoList
        todos={todos}
        onTodoToggle={toggleTodo}
        onTodoDelete={deleteTodo}
      />

      <TodoForm onTodoAdd={addTodo} />
    </div>
  );
}

export default App;
