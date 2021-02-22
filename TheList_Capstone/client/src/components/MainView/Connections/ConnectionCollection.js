import React, { useContext, useEffect } from "react";
import PlanContainer from "../Plan/PlanContainer";
import { TaskContext } from "../../../providers/TaskProvider";
import { PlanContext } from "../../../providers/PlanProvider";
import { useParams } from "react-router-dom";

const ConnectionCollection = () => {
  const { plans, getPlansByUserId } = useContext(PlanContext);
  const { userId } = useParams();
  const { task } = useContext(TaskContext);

  useEffect(() => {
    getPlansByUserId(userId);
  }, [task]);

  if (!plans) return null;

  return (
    <article>
      {plans.map((plan) => (
        <PlanContainer key={plan.id} plan={plan} />
      ))}
    </article>
  );
};
export default ConnectionCollection;
