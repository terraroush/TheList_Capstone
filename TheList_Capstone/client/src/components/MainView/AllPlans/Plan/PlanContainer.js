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

  return (
    <>
      <div className="App">
        <PlanDetailsForm />
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          setInputText={setInputText}
          inputText={inputText}
        />
        <TaskList tasks={tasks} setTasks={setTasks} />
        {/* <Button type="submit">Save</Button> */}
      </div>
    </>
  );
};
export default PlanContainer;
