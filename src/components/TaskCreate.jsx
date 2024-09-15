import { useState } from "react";

function TaskCreate({ parentTaskId, onCreate }) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(parentTaskId, taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "inline" }}>
      <label>Add New Task</label>
      <input value={taskName} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

export default TaskCreate;
