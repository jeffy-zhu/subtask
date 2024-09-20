import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskCreate({ parentTaskId, depth, style }) {
  const [taskName, setTaskName] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleChange = (e) => setTaskName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(parentTaskId, taskName, depth + 1);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} style={style}>
      <label>Add Task</label>
      <input value={taskName} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

export default TaskCreate;
