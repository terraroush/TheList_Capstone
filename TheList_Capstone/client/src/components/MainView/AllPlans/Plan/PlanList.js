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
  console.log(plans);

  return (
    <section className="listory-container">
      <h3>My Listory</h3>
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
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};
export default PlanList;
