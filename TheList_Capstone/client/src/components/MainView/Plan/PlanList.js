import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PlanContext } from "../../../providers/PlanProvider";
import { Button } from "reactstrap";
import PlanContainer from "./PlanContainer";
import { TaskContext } from "../../../providers/TaskProvider";

const PlanList = () => {
  const { plans, getPlansByUserId } = useContext(PlanContext);
  const { task } = useContext(TaskContext);
  const history = useHistory();
  const activeUser = +localStorage.getItem("userProfileId");

  useEffect(() => {
    getPlansByUserId(activeUser);
  }, [task]);

  if (!plans) return null;

  return (
    <section className="listory-container">
      <h4>My Listory</h4>
      <br />

      <div>
        {plans.length === 0 && "Coming Soon! Try adding a list "}
        {plans.length === 0 && (
          <Button
            size="small"
            outline
            color="info"
            onClick={() => history.push("/listcenter/createlist")}
          >
            New List
          </Button>
        )}
        {plans?.map((plan) => (
          <PlanContainer key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};
export default PlanList;
