import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { PlanContext } from "../providers/PlanProvider";
import "./MainView/AllPlans/Plan/PlanCard.css";
import { useContext } from "react";

// need to pass in the plan id
const ButtonsEditDelete = ({ plan }) => {
  const { getPlansByUserId, deletePlan } = useContext(PlanContext);
  const [plans, setPlans] = useState({});
  const history = useHistory();

  useEffect(() => {
    getPlansByUserId(plan.id);
  }, []);

  return (
    <div className="hiddenButtons">
      <Button
        className="plan-button"
        type="submit"
        onClick={() => {
          history.push(`/listcenter/edit/${plan.id}`);
        }}
      >
        <i className="fas fa-pen-square" />
      </Button>

      <Button
        className="plan-button"
        type="submit"
        onClick={(e) => {
          if (window.confirm("Delete plan with everything in it?"))
            deletePlan(plan.id).then(() => {
              history.push("/clients");
            });
        }}
      >
        <i className="fas fa-trash" />
      </Button>
    </div>
  );
};
export default ButtonsEditDelete;
