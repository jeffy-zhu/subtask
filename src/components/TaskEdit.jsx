import { useState } from "react";

function TaskEdit({ task, onEditSubmit }) {
  const [taskName, setTaskName] = useState(task.name);

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEditSubmit(task.id, taskName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={taskName} onChange={handleChange}></input>
      <button>Save</button>
    </form>
  );
}

export default TaskEdit;
