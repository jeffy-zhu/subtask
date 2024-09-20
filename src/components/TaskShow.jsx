import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";
import SubtaskCreate from "./SubtaskCreate";
import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskShow({ task }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showAddSubtask, setShowAddSubtask] = useState(false);
  const { deleteTask, editTaskShowSubtasks } = useContext(TasksContext);

  const handleShowSubtasksClick = () => {
    task.subtasks.length > 0 &&
      editTaskShowSubtasks(task.id, !task.showSubtasks);
  };

  let content = showEdit ? (
    <span>
      <TaskEdit
        task={task}
        onSubmit={() => setShowEdit(false)}
        onCancel={() => setShowEdit(false)}
      />
    </span>
  ) : (
    <div>
      <span onClick={handleShowSubtasksClick}>{task.name}</span>
      <button onClick={() => setShowAddSubtask(true)}>Add Subtask</button>
      <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );

  return (
    <div>
      <div
        style={{
          position: "relative",
          left: `${task.depth * 30}px`,
          border: "solid",
        }}
      >
        {content}
      </div>
      {task.showSubtasks && <TaskList tasks={task.subtasks} />}

      {showAddSubtask && (
        <SubtaskCreate
          parentTaskId={task.id}
          depth={task.depth}
          onCancel={() => setShowAddSubtask(false)}
        />
      )}
    </div>
  );
}

export default TaskShow;
