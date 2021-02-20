import React, { useContext, useEffect } from "react";
import { PlanContext } from "../../../providers/PlanProvider";
import { TaskContext } from "../../../providers/TaskProvider";
import { useParams } from "react-router-dom";
import PlanContainer from "./PlanContainer";

const UserPlan = () => {
  const { currentPlan, getPlanById } = useContext(PlanContext);
  const { task } = useContext(TaskContext);
  const params = useParams();
  const planId = +params.planId;

  useEffect(() => {
    getPlanById(planId);
  }, [task]);

  if (!currentPlan) return null;

  return <PlanContainer plan={currentPlan} />;
};
export default UserPlan;
