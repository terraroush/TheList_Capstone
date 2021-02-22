import React, { useContext, useEffect } from "react";
import { PlanContext } from "../providers/PlanProvider";
import { TaskContext } from "../providers/TaskProvider";
import PlanContainer from "../components/MainView/Plan/PlanContainer";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const ListCenter = () => {
  const { recentPlans, getRecentPlansByUserId } = useContext(PlanContext);
  const activeUser = localStorage.getItem("userProfileId");
  const { task } = useContext(TaskContext);
  const history = useHistory();

  useEffect(() => {
    getRecentPlansByUserId(activeUser);
  }, [task]);

  if (!recentPlans) return null;

  return (
    <article className="recentPlanContainer">
      <h4>Your Most Recent List</h4>
      <br />
      {recentPlans.length === 0 && "Coming Soon! Try adding a list "}
      {recentPlans.length === 0 && (
        <Button
          size="small"
          outline
          color="info"
          onClick={() => history.push("/listcenter/createlist")}
        >
          New List
        </Button>
      )}
      {recentPlans.map((recentPlan) => (
        <PlanContainer key={recentPlan.id} plan={recentPlan} />
      ))}
    </article>
  );
};
export default ListCenter;
