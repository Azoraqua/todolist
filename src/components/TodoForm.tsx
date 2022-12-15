import { FormEvent, useRef } from "react";

export type TodoFormProps = {
  onTodoAdd: (name: string) => void;
};

export default function TodoForm({ onTodoAdd }: TodoFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onTodoAdd(inputRef.current?.value!!);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" placeholder="Name" ref={inputRef} />
      <button type="submit" className="btn btn-add">
        Add
      </button>
    </form>
  );
}
