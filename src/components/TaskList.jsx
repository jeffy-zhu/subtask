import TaskShow from "./TaskShow";

function TaskList({ tasks, onCreate, onDelete, onEdit }) {
  const renderedTasks = tasks.map((task, i) => {
    return (
      <TaskShow
        key={i}
        task={task}
        onCreate={onCreate}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });

  return <div>{renderedTasks}</div>;
}

export default TaskList;
