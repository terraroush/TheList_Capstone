import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PlanContext } from "../../../../providers/PlanProvider";
import { Button } from "reactstrap";
import PlanCard from "./PlanCard";

const PlanList = () => {
  const { plans, getPlansByUserId } = useContext(PlanContext);

  const history = useHistory();
  const activeUser = localStorage.getItem("userProfileId");

  useEffect(() => {
    getPlansByUserId(activeUser);
  }, []);

  if (!plans) return null;

  return (
    <article>
      <h1>My Listory</h1>
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
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </article>
  );
};
export default PlanList;
