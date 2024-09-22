import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";
import SubtaskCreate from "./SubtaskCreate";
import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskShow({ task }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showAddSubtask, setShowAddSubtask] = useState(false);
  const [hideSubtasks, setHideSubtasks] = useState(false);
  const { deleteTask, clearSubtasks } = useContext(TasksContext);

  const handleHideSubtasksClick = () => {
    task.subtasks.length > 0 && setHideSubtasks(!hideSubtasks);
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
      <span onClick={handleHideSubtasksClick}>{task.name} </span>
      <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      <button onClick={() => setShowAddSubtask(true)}>Add Subtask</button>
      {task.subtasks.length > 0 && (
        <button onClick={() => clearSubtasks(task.id)}>Clear Subtasks</button>
      )}
      <button onClick={() => deleteTask(task.id)}>Remove</button>
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
      <div style={{ display: hideSubtasks && "none" }}>
        <TaskList tasks={task.subtasks} />
        <div
          style={{
            position: "relative",
            left: `${(task.depth + 1) * 30}px`,
            border: showAddSubtask && "solid",
          }}
        >
          {showAddSubtask && (
            <SubtaskCreate
              parentTaskId={task.id}
              depth={task.depth}
              onCancel={() => setShowAddSubtask(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskShow;
