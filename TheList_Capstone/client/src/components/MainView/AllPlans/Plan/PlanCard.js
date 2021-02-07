import React from "react";
import { Card, CardHeader, CardTitle, CardSubtitle } from "reactstrap";

const PlanCard = ({ plan }) => (
  <Card>
    <CardHeader>
      <CardTitle tag="h5">{plan.title}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        {!plan.deadline === null
          ? "Due: " + plan.deadline
          : "Created: " + plan.dateCreated}
      </CardSubtitle>
    </CardHeader>
  </Card>
);
export default PlanCard;
