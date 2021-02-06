import React from "react";
import { ListGroup } from "reactstrap";
import Task from "./Task";
import "./Plan.css";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="task-container">
      <ListGroup className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            planItem={task.planItem}
            tasks={tasks}
            task={task}
            setTasks={setTasks}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
