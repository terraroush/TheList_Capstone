import React, { useState, useContext, useEffect } from "react";
import { PlanContext } from "../../../../providers/PlanProvider";
import { TaskContext } from "../../../../providers/TaskProvider";
import { useParams } from "react-router-dom";
import "./Plan.css";

import TaskForm from "./TaskForm";
import PlanCard from "./PlanCard";

// need to get all tasks for current plan;
// and we need the current plan.
const PlanContainer = () => {
  const { currentPlan, getPlanById } = useContext(PlanContext);
  const { tasks } = useContext(TaskContext);
  const params = useParams();
  const planId = +params.planId;

  useEffect(() => {
    getPlanById(planId);
  }, [tasks]);

  if (!currentPlan) return null;

  return (
    <div className="planContainer-container">
      <PlanCard plan={currentPlan} />
      <TaskForm
        className="stationaryForm"
        planId={planId}
        isGrocery={currentPlan.planType.isGrocery}
      />
      {currentPlan.planItems.map((planItem) => (
        <TaskForm
          key={planItem.id}
          planId={planId}
          task={planItem}
          isGrocery={currentPlan.planType.isGrocery}
        />
      ))}
    </div>
  );
};
export default PlanContainer;
