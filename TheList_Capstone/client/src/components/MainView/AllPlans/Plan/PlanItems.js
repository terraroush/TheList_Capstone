import React from "react";
import { CardText, CardBody } from "reactstrap";

const PlanItems = ({ plan }) => (
  <CardBody>
    {plan.planItems.length > 0
      ? plan.planItems.map((planItem) => (
          <CardText key={plan.planItems.id} planItem={planItem}>
            {planItem.name}
          </CardText>
        ))
      : ""}
  </CardBody>
);
export default PlanItems;
