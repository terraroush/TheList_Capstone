import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./PlanCard.css";

const PlanCard = ({ plan }) => (
  <Card className="planCard-container">
    <CardHeader>
      <CardTitle tag="h5">{plan.title}</CardTitle>
    </CardHeader>
    {/* <CardSubtitle
      tag="h6"
      className="m-2
     text-muted"
    >
      {plan.deadline === null
        ? "Created: " + plan.dateCreated
        : "Due: " + plan.deadline}
    </CardSubtitle> */}
    <CardBody>
      <ListGroup>
        <ListGroupItem className="p-2">
          Created: {plan.dateCreated}
        </ListGroupItem>
        {plan.dateUpdated && (
          <ListGroupItem className="p-2">
            Last Update: {plan.dateUpdated}
          </ListGroupItem>
        )}

        {plan.deadline && (
          <ListGroupItem className="p-2">
            Due Date: {plan.deadline}
          </ListGroupItem>
        )}

        <ListGroupItem className="p-2">
          {plan.active ? "Active" : "Expired"}
        </ListGroupItem>
        <ListGroupItem className="p-2">
          {plan.public ? "Public" : "Private"}
        </ListGroupItem>
        <ListGroupItem className="p-2">
          Author: {plan.userProfile.userName}
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);
export default PlanCard;
