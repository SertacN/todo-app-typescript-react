import { TodoType } from "../appType";
function TodoList({
  todo,
  todoDelete,
}: {
  todo: TodoType[];
  todoDelete: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div>
      {todo.map((item: TodoType) => {
        return (
          <div key={item.id}>
            <h3>{item.taskName}</h3>
            <p>
              Will be completed in <span>{item.doneTime}</span> Hours
            </p>
            <button onClick={(event) => todoDelete(item.id, event)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
