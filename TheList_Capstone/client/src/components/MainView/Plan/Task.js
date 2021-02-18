import React from "react";
import { Button } from "reactstrap";
import "./Plan.css";

const Task = ({ name, task, tasks, setTasks }) => {
  // handlers
  const deleteHandler = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };
  const completeHandler = () => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      })
    );
  };

  return (
    <div className="task">
      <li className={`task-item ${task.completed ? "completed" : ""}`}>
        {name}
      </li>
      <Button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </Button>
      <Button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </Button>
    </div>
  );
};
export default Task;
