import React, { useState, useContext, useEffect } from "react";
import { PlanContext } from "../../../../providers/PlanProvider";
import { useParams } from "react-router-dom";
import "./Plan.css";

// components
import TaskForm from "./TaskForm";
// import PlanDetailsForm from "./PlanDetailsForm";
import TaskList from "./TaskList";
import PlanCard from "./PlanCard";

// need to get all tasks for current plan;
// and we need the current plan.
const PlanContainer = () => {
  const { currentPlan, getPlanById } = useContext(PlanContext);
  const params = useParams();
  const planId = +params.planId;

  useEffect(() => {
    getPlanById(planId);
  }, []);
  console.log(currentPlan);
  if (!currentPlan) return null;
  return (
    <div className="App">
      <PlanCard plan={currentPlan} />
      <TaskForm planId={planId} />
      {/* <TaskList tasks={tasks} setTasks={setTasks} /> */}
    </div>
  );
};
export default PlanContainer;
