function TodoCreate() {
  return (
    <div>
      <h3>Enter Task</h3>
      <input type="text" placeholder="Write Task" />
      <h3>Set Time for Task</h3>
      <input type="number" placeholder="Set Done Time" />
      <div>
        <button>Add</button>
      </div>
    </div>
  );
}

export default TodoCreate;
