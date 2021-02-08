import React, { useContext, useEffect } from "react";
import { PlanContext } from "../providers/PlanProvider";
import { TaskContext } from "../providers/TaskProvider";

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
    <div className="App">
      <h2>Your Most Recent Plan</h2>

      {recentPlans.map((recentPlan) => (
        <PlanCard key={recentPlan.id} plan={recentPlan} />
      ))}
      {recentPlans.map((recentPlan) => (
        <TaskForm key={recentPlan.id} />
      ))}
      {recentPlans.map((recentPlan) =>
        recentPlan.planItems.map((planItem) => (
          <TaskForm key={planItem.id} planId={recentPlan.id} task={planItem} />
        ))
      )}
    </div>
  );
};
export default ListCenter;
