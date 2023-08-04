import { TodoType } from "../appType";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
function TodoList() {
  const { todoItem, todoDelete } = useContext(TodoContext);
  return (
    <div className="todoListContainer">
      {todoItem.map((item: TodoType) => {
        return (
          <div key={item.id} className="todosContainer">
            <h4>Your Task</h4>
            <h3>{item.taskName}</h3>
            <p>
              Will be completed in <span>{item.doneTime}</span> Hours
            </p>
            <button onClick={() => todoDelete(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
