import React, { useState, useContext, useEffect } from "react";
import { PlanContext } from "../../../../providers/PlanProvider";
import { TaskContext } from "../../../../providers/TaskProvider";
import { GroceryProvider } from "../../../../providers/GroceryProvider";
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
      <GroceryProvider>
        <TaskForm
          className="stationaryForm"
          planId={planId}
          isGrocery={currentPlan.planType.isGrocery}
        />
      </GroceryProvider>
      {currentPlan.planItems.map((planItem) => (
        <GroceryProvider key={planItem.id}>
          <TaskForm
            planId={planId}
            task={planItem}
            isGrocery={currentPlan.planType.isGrocery}
          />
        </GroceryProvider>
      ))}
    </div>
  );
};
export default PlanContainer;
