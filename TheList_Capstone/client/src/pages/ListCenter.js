import React, { useContext, useEffect } from "react";
import { PlanContext } from "../providers/PlanProvider";
import { TaskContext } from "../providers/TaskProvider";
import PlanContainer from "../components/MainView/Plan/PlanContainer";

const ListCenter = () => {
  const { recentPlans, getRecentPlansByUserId } = useContext(PlanContext);
  const activeUser = localStorage.getItem("userProfileId");
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    getRecentPlansByUserId(activeUser);
  }, [tasks]);

  if (!recentPlans) return null;

  return (
    <article className="recentPlanContainer">
      <h3>Your Most Recent Plan</h3>
      <br />
      {recentPlans.map((recentPlan) => (
        <PlanContainer key={recentPlan.id} plan={recentPlan} />
      ))}
    </article>
  );
};
export default ListCenter;
