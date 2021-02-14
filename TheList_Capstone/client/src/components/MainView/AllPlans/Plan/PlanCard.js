import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { toast } from "react-toastify";
import { PlanContext } from "../../../../providers/PlanProvider";
import { useHistory } from "react-router-dom";
import "./PlanCard.css";

const PlanCard = ({ plan }) => {
  const { deletePlan } = useContext(PlanContext);
  const history = useHistory();

  return (
    <Card className="planCard-container">
      <CardHeader className="buttons-container">
        <CardTitle tag="h5" className="card-title">
          {plan.title}
          {/* <button className="expandable">+</button> */}
        </CardTitle>
        <Button
          className="plan-button edit-btn"
          type="submit"
          onClick={() => {
            history.push(`/listcenter/edit/${plan.id}`);
          }}
        >
          <i className="fas fa-pen-square" />
        </Button>
        <Button
          className="plan-button delete-btn"
          type="submit"
          onClick={(e) => {
            if (window.confirm("Delete plan with everything in it?"))
              deletePlan(plan.id)
                .then(() => {
                  toast.success("I hope you said goodbye");
                })
                .then(() => {
                  history.push("/listcenter/listory");
                });
          }}
        >
          <i className="fas fa-trash" />
        </Button>
      </CardHeader>
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

          {plan.planTypeId === 1 && (
            <ListGroupItem className="p-2">Grocery List</ListGroupItem>
          )}

          <ListGroupItem className="p-2">
            Author: {plan.userProfile.userName}
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};
export default PlanCard;
