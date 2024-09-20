import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";
import TasksContext from "./context/tasks";
import { useContext } from "react";

function App() {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      <TaskCreate
        parentTaskId={null}
        depth={-1}
        style={{ display: "inline" }}
      />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
