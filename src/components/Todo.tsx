export type TodoProps = {
  readonly id: number;
  readonly name: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export default function Todo({
  id,
  name,
  completed,
  onToggle,
  onDelete,
}: TodoProps) {
  return (
    <tr className="todo">
      <td>{name}</td>
      <td>{completed ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-toggle" onClick={onToggle}>
          Toggle
        </button>

        <button type="button" className="btn btn-delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
