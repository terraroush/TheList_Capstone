import React from "react";
import { GroceryProvider } from "../../../../providers/GroceryProvider";
import TaskForm from "./TaskForm";
import PlanCard from "./PlanCard";
import "./Plan.css";

const PlanContainer = ({ plan }) => (
  <div className="planContainer-container">
    <PlanCard plan={plan} />
    <GroceryProvider>
      <TaskForm
        className="stationaryForm"
        planId={plan.id}
        isGrocery={plan.planType.isGrocery}
      />
    </GroceryProvider>
    {plan.planItems.map((planItem) => (
      <GroceryProvider key={planItem.id}>
        <TaskForm
          planId={plan.id}
          task={planItem}
          isGrocery={plan.planType.isGrocery}
        />
      </GroceryProvider>
    ))}
  </div>
);
export default PlanContainer;
