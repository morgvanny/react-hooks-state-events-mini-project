import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((t, i) => {
        return (
          <Task
            key={i}
            {...t}
            deleteTask={() => {
              deleteTask(t);
            }}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
