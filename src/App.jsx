import "./App.css";
import TaskList from "./components/TaskList";
import { useState } from "react";
import TaskCreate from "./components/TaskCreate";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleCreate = (parentTaskId, taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      subtasks: [],
    };

    if (parentTaskId === null) {
      setTasks([...tasks, newTask]);
    } else {
      const getUpdatedTasks = (tasks) => {
        for (const task of tasks) {
          if (task.id !== parentTaskId) {
            getUpdatedTasks(task.subtasks);
          } else {
            task.subtasks.push(newTask);
          }
        }

        return tasks;
      };

      setTasks(getUpdatedTasks(tasks.slice()));
    }
  };

  return (
    <div>
      <TaskCreate parentTaskId={null} onCreate={handleCreate} />
      <TaskList tasks={tasks} onCreate={handleCreate} />
    </div>
  );
}

export default App;
