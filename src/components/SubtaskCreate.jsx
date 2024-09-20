import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function SubtaskCreate({ parentTaskId, depth, onCancel }) {
  const [subtaskName, setSubtaskName] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleChange = (e) => setSubtaskName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(parentTaskId, subtaskName, depth + 1);
    onCancel();
  };

  return (
    <div
      style={{
        display: "inline",
        position: "relative",
        left: `${(depth + 1) * 30}px`,
      }}
    >
      <form style={{ display: "inline" }} onSubmit={handleSubmit}>
        <input value={subtaskName} onChange={handleChange}></input>
        <button>Save</button>
      </form>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default SubtaskCreate;
