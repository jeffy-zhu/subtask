import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";
import TasksContext from "./context/tasks";
import { useContext } from "react";

function App() {
  const { tasks, deleteAllTasks } = useContext(TasksContext);

  return (
    <div>
      <h1>Subtask</h1>
      <TaskCreate
        parentTaskId={null}
        depth={-1}
        style={{ display: "inline" }}
      />
      <TaskList tasks={tasks} />
      <button onClick={deleteAllTasks}>Clear All</button>
    </div>
  );
}

export default App;
