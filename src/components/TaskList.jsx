import TaskShow from "./TaskShow";

function TaskList({ tasks }) {
  const renderedTasks = tasks.map((task, i) => {
    return <TaskShow key={i} task={task} />;
  });

  return <div>{renderedTasks}</div>;
}

export default TaskList;
