import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function SubtaskCreate({ parentTaskId, depth, onCancel }) {
  const [subtaskName, setSubtaskName] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(parentTaskId, subtaskName, depth + 1);
    onCancel();
  };

  return (
    <div>
      <form style={{ display: "inline" }} onSubmit={handleSubmit}>
        <input
          value={subtaskName}
          onChange={(e) => setSubtaskName(e.target.value)}
        />
        <button>Save</button>
      </form>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default SubtaskCreate;
