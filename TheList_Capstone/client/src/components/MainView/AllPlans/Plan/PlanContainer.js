import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "./Plan.css";

// components
import PlanForm from "./PlanForm";
import PlanDetailsForm from "./PlanDetailsForm";
import TaskCard from "./TaskCard";

const PlanContainer = () => {
  // state
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  // effects

  // (only run once)
  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    saveLocalTasks();
  }, [tasks]);

  // save to local storage
  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTask = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTask);
    }
  };

  return (
    <>
      <div className="App">
        <PlanDetailsForm />
        <PlanForm
          tasks={tasks}
          setTasks={setTasks}
          setInputText={setInputText}
          inputText={inputText}
        />
        <TaskCard tasks={tasks} setTasks={setTasks} />
        <Button type="submit">Save</Button>
      </div>
    </>
  );
};
export default PlanContainer;
