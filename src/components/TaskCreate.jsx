import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskCreate({ parentTaskId, depth, style }) {
  const [taskName, setTaskName] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.length > 0) {
      createTask(parentTaskId, taskName, depth + 1);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={style}>
      <label>
        Add Task{" "}
        <input
          value={taskName}
          placeholder="e.g. Clean my room"
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>{" "}
      <button>Add</button>
    </form>
  );
}

export default TaskCreate;
