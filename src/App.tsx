import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import { TodoType } from "./appType";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState<TodoType[]>([]);

  const todos = (item: React.SetStateAction<TodoType[]>): void => {
    setTodoItem(item);
  };
  console.log(todoItem);

  const todoDelete = (id: number) => {
    setTodoItem(
      todoItem.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <div>
      <TodoCreate todos={todos} />
      <TodoList todo={todoItem} todoDelete={todoDelete} />
    </div>
  );
}

export default App;
