import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskEdit({ task, onSubmit, onCancel }) {
  const [newTaskName, setNewTaskName] = useState(task.name);
  const { editTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newTaskName);
    onSubmit();
  };

  return (
    <div>
      <form style={{ display: "inline" }} onSubmit={handleSubmit}>
        <input
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <button>Save</button>
      </form>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default TaskEdit;
