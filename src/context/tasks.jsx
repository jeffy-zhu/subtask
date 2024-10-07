import { createContext, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = (parentTaskId, name, depth) => {
    const newTask = {
      id: Date.now(),
      name,
      depth,
      subtasks: [],
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

  const generateSubtasks = (parentTaskId, names, depth) => {
    const newSubtasks = [];

    for (const [i, name] of names.entries()) {
      let newSubtask = {
        id: Date.now() + i,
        name: name.taskName,
        depth,
        subtasks: [],
      };

      newSubtasks.push(newSubtask);
    }

    const getUpdatedTasks = (tasks) => {
      for (const task of tasks) {
        if (task.id !== parentTaskId) getUpdatedTasks(task.subtasks);
        else task.subtasks.push(...newSubtasks);
      }

      return tasks;
    };

    setTasks(getUpdatedTasks(tasks.slice()));
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

  const deleteAllTasks = () => setTasks([]);

  const clearSubtasks = (taskId) => {
    const getUpdatedTasks = (tasks) => {
      for (const task of tasks) {
        if (task.id === taskId) task.subtasks = [];
        else getUpdatedTasks(task.subtasks);
      }

      return tasks;
    };

    setTasks(getUpdatedTasks(tasks.slice()));
  };

  const updateTaskName = (taskId, newTaskName) => {
    const getUpdatedTasks = (tasks) => {
      for (const task of tasks) {
        if (task.id === taskId) task.name = newTaskName;
        else getUpdatedTasks(task.subtasks);
      }

      return tasks;
    };

    setTasks(getUpdatedTasks(tasks.slice()));
  };

  const valueToShare = {
    tasks,
    createTask,
    generateSubtasks,
    deleteTask,
    deleteAllTasks,
    clearSubtasks,
    updateTaskName,
  };

  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
