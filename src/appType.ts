export type TodoType = {
  taskName: string;
  doneTime: number;
  id: number;
  todos?: React.SetStateAction<TodoType[]>;
  item?: Array<object>;
};

export type PropsType = {
  todos?: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
