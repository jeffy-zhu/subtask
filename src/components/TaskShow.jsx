import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import TaskEdit from "./TaskEdit";
import { useState } from "react";

function TaskShow({ task, onCreate, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleEditSubmit = (taskId, newTaskName) => {
    onEdit(taskId, newTaskName);
    setShowEdit(false);
  };

  return (
    <div>
      {!showEdit ? (
        <span>
          {task.name}
          <TaskCreate parentTaskId={task.id} onCreate={onCreate}></TaskCreate>
        </span>
      ) : (
        <TaskEdit task={task} onEditSubmit={handleEditSubmit} />
      )}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
      <TaskList
        tasks={task.subtasks}
        onCreate={onCreate}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
}

export default TaskShow;
