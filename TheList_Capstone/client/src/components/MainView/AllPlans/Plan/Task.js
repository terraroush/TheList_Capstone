import React from "react";
import { Button } from "reactstrap";
import "./Plan.css";

const Task = ({ text, task, tasks, setTasks }) => {
  // events
  const deleteHandler = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };
  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="task">
      <li className={`task-item ${task.completed ? "completed" : ""}`}>
        {text}
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
