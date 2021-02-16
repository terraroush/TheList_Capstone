import React, { useContext, useEffect } from "react";
import { PlanContext } from "../providers/PlanProvider";
import { TaskContext } from "../providers/TaskProvider";
import { GroceryProvider } from "../providers/GroceryProvider";
import "../components/MainView/AllPlans/Plan/ListCenter.css";

import TaskForm from "../components/MainView/AllPlans/Plan/TaskForm";
import PlanCard from "../components/MainView/AllPlans/Plan/PlanCard";

const ListCenter = () => {
  const { recentPlans, getRecentPlansByUserId } = useContext(PlanContext);
  const activeUser = localStorage.getItem("userProfileId");
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    getRecentPlansByUserId(activeUser);
  }, [tasks]);

  if (!recentPlans) return null;

  return (
    <div className="recentPlanContainer">
      <h3>Your Most Recent Plan</h3>
      <br />

      {recentPlans.map((recentPlan) => (
        <PlanCard key={recentPlan.id} plan={recentPlan} />
      ))}
      <GroceryProvider>
        {recentPlans.map((recentPlan) => (
          <TaskForm key={recentPlan.id} planId={recentPlan.id} />
        ))}
      </GroceryProvider>
      <GroceryProvider>
        {recentPlans.map((recentPlan) =>
          recentPlan.planItems.map((planItem) => (
            <TaskForm
              key={planItem.id}
              planId={recentPlan.id}
              task={planItem}
            />
          ))
        )}
      </GroceryProvider>
    </div>
  );
};
export default ListCenter;
