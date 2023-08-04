import { createContext, useState } from "react";
import { TodoType } from "../appType";

type TodoContextProps = {
  children: React.ReactNode;
};

export const TodoContext = createContext<{
  todos: (item: React.SetStateAction<TodoType[]>) => void;
  todoDelete: (id: number) => void;
  todoItem: TodoType[];
}>({
  todos: () => {},
  todoDelete: () => {},
  todoItem: [],
});

function Provider({ children }: TodoContextProps) {
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

  const sharedValue = {
    todos,
    todoDelete,
    todoItem,
    setTodoItem,
  };

  return (
    <TodoContext.Provider value={sharedValue}>{children}</TodoContext.Provider>
  );
}

export { Provider };
