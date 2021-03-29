import React, { useContext, useEffect } from "react";
import PlanContainer from "../Plan/PlanContainer";
import { TaskContext } from "../../../providers/TaskProvider";
import { PlanContext } from "../../../providers/PlanProvider";
import { useParams } from "react-router-dom";
import "./Connection.css";
import ConnectionsPlanList from "./ConnectionsPlanList";

const ConnectionCollection = () => {
  const { plans, getPublicPlansByUserId } = useContext(PlanContext);
  const { userId } = useParams();
  const { task } = useContext(TaskContext);

  useEffect(() => {
    getPublicPlansByUserId(userId);
  }, [task]);

  if (!plans || plans === undefined) return null;

  return (
    <article>
      {plans?.length === 0 ? (
        "This user has no public lists"
      ) : (
        <h7>This user has {plans?.length} public lists</h7>
      )}
      {plans?.map((plan) => (
        <PlanContainer key={plan.id} plan={plan} />
      ))}
    </article>
  );
};
export default ConnectionCollection;
