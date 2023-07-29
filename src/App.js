import { useState } from "react";
import { initialData } from "./initial-data";
import { Column } from "./components/Column/Column";

function App() {
  const [data, setData] = useState(initialData);

  return (
    <div>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.tasksIds.map((taskId) => data.tasks[taskId]);

        return <Column key={columnId} column={column} tasks={tasks} />;
      })}
    </div>
  );
}

export default App;
