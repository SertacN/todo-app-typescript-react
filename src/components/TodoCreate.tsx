import { useState } from "react";
import { PropsType, TodoType } from "../appType";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCreate({ todos }: PropsType) {
  const [task, setTask] = useState<string>("");
  const [doneTime, setDoneTime] = useState<number>(0);
  const { todoItem, setTodoItem } = useContext(TodoContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDoneTime(Number(event.target.value));
    }
  };

  const handleClick = (): null | undefined => {
    const newTodo = { taskName: task, doneTime: doneTime, id: todoItem.length };
    setTodoItem((prevTodoList: TodoType[]) => [...prevTodoList, newTodo]);
    setTask("");
    setDoneTime(0);
    if (typeof todos === "undefined") {
      return null;
    } else {
      todos([...todoItem, newTodo]);
    }
  };

  return (
    <div className="mainCreateContainer">
      <div className="createContainer">
        <h3>Enter Task</h3>
        <input
          type="text"
          placeholder="Write Task"
          value={task}
          name="task"
          onChange={handleChange}
        />
        <h3>Set Hour for Complete Task </h3>
        <input
          type="number"
          placeholder="Set Done Time"
          value={doneTime}
          name="doneTime"
          onChange={handleChange}
        />
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
