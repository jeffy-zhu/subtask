import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onCreate }) {
  return (
    <div>
      {task.name}
      <TaskCreate parentTaskId={task.id} onCreate={onCreate}></TaskCreate>
      <TaskList tasks={task.subtasks} onCreate={onCreate} />
    </div>
  );
}

export default TaskShow;
