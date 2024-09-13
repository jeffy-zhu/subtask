import TaskShow from "./TaskShow";

function TaskList({ tasks, onCreate }) {
  const renderedTasks = tasks.map((task, i) => {
    return <TaskShow key={i} task={task} onCreate={onCreate} />;
  });

  return <div>{renderedTasks}</div>;
}

export default TaskList;
