import React from "react";
import { Card, CardHeader, CardTitle, CardSubtitle } from "reactstrap";
import "./PlanCard.css";

const PlanCard = ({ plan }) => (
  <Card className="planCard-container">
    <CardHeader>
      <CardTitle tag="h5">{plan.title}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        {plan.deadline === null
          ? "Created: " + plan.dateCreated
          : "Due: " + plan.deadline}
      </CardSubtitle>
    </CardHeader>
  </Card>
);
export default PlanCard;
