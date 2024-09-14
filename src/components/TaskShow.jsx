import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onCreate, onDelete }) {
  return (
    <div>
      {task.name}
      <TaskCreate parentTaskId={task.id} onCreate={onCreate}></TaskCreate>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <TaskList tasks={task.subtasks} onCreate={onCreate} onDelete={onDelete} />
    </div>
  );
}

export default TaskShow;
