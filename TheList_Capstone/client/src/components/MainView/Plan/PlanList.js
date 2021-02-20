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
  // hmm plans from context are first all plans from everyone
  console.log(plans, activeUser);

  return (
    <section className="listory-container">
      <h4>My Listory</h4>
      <br />
      <Button
        size="small"
        outline
        color="info"
        onClick={() => history.push("/listcenter/createlist")}
      >
        New List
      </Button>

      <div>
        {plans.map((plan) => (
          <PlanContainer key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};
export default PlanList;
