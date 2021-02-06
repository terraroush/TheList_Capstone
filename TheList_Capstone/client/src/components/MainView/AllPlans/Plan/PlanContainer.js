import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";
import "./Plan.css";

// components
import TaskForm from "./TaskForm";
import PlanDetailsForm from "./PlanDetailsForm";
import TaskList from "./TaskList";

const PlanContainer = () => {
  // state
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  return (
    <>
      <div className="App">
        <PlanDetailsForm />
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          setInputText={setInputText}
          inputText={inputText}
          task={task}
          setTask={setTask}
        />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};
export default PlanContainer;
