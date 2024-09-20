import { createContext, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = (parentTaskId, taskName, depth) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      depth,
      subtasks: [],
      showSubtasks: true,
    };

    const getUpdatedTasks = (tasks) => {
      for (const task of tasks) {
        if (task.id !== parentTaskId) getUpdatedTasks(task.subtasks);
        else task.subtasks.push(newTask);
      }

      return tasks;
    };

    if (parentTaskId === null) setTasks([...tasks, newTask]);
    else setTasks(getUpdatedTasks(tasks.slice()));
  };

  const deleteTask = (taskId) => {
    const getUpdatedTasks = (tasks) => {
      for (const [i, task] of tasks.entries()) {
        if (task.id === taskId) tasks.splice(i, 1);
        else getUpdatedTasks(task.subtasks);
      }

      return tasks;
    };

    setTasks(getUpdatedTasks(tasks.slice()));
  };

  const editTask = (taskId, newTaskName) => {
    const getUpdatedTasks = (tasks) => {
      for (const task of tasks) {
        if (task.id === taskId) task.name = newTaskName;
        else getUpdatedTasks(task.subtasks);
      }

      return tasks;
    };

    setTasks(getUpdatedTasks(tasks.slice()));
  };

  const editTaskShowSubtasks = (taskId, show) => {
    const getUpdatedTasks = (tasks) => {
      for (const task of tasks) {
        if (task.id === taskId) task.showSubtasks = show;
        else getUpdatedTasks(task.subtasks);
      }

      return tasks;
    };

    setTasks(getUpdatedTasks(tasks.slice()));
  };

  const valueToShare = {
    tasks,
    createTask,
    deleteTask,
    editTask,
    editTaskShowSubtasks,
  };

  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
