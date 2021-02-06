import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import PlanItems from "./PlanItems";
import TaskForm from "./TaskForm";

// plan object coming in from PlanList; Currently supplying all plans by this user.
const PlanCard = ({ plan }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h5">{plan.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {plan.dateCreated}
          </CardSubtitle>
        </CardHeader>
        <PlanItems key={plan.id} plan={plan} />
        <CardFooter>
          <TaskForm />
        </CardFooter>
      </Card>
    </>
  );
};
export default PlanCard;
