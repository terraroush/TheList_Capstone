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
import Collapsible from "react-collapsible";
import { toast } from "react-toastify";
import formatDate from "../../../utils/dateFormatter";
import { PlanContext } from "../../../providers/PlanProvider";
import { useHistory } from "react-router-dom";
import "./PlanCard.css";

const PlanCard = ({ plan }) => {
  const { deletePlan } = useContext(PlanContext);
  const history = useHistory();
  const currentUserId = +localStorage.getItem("userProfileId");

  return (
    <Card className="planCard-container">
      <CardHeader className="buttons-container">
        <CardTitle tag="h5" className="card-title">
          {plan.userProfile?.userName}: {plan.title}{" "}
          {!plan.public && "(PRIVATE)"}
        </CardTitle>
      </CardHeader>
      <Collapsible trigger={<i className="fas fa-angle-down" />}>
        <CardBody>
          <ListGroup className="stuff">
            <ListGroupItem className="p-2">
              Created: {formatDate(plan.dateCreated)}
            </ListGroupItem>
            {plan.dateUpdated && (
              <ListGroupItem className="p-2">
                Last Update: {formatDate(plan.dateUpdated)}
              </ListGroupItem>
            )}

            {plan.deadline && (
              <ListGroupItem className="p-2">
                Due Date: {formatDate(plan.deadline)}
              </ListGroupItem>
            )}

            <ListGroupItem className="p-2">
              {plan.public ? "Public" : "Private"}
            </ListGroupItem>

            {plan.planTypeId === 1 && (
              <ListGroupItem className="p-2">Grocery List</ListGroupItem>
            )}

            <ListGroupItem className="p-2 last">
              Author: {plan.userProfile?.userName}
            </ListGroupItem>
          </ListGroup>
          <Button
            className="grey"
            type="button"
            onClick={() => {
              history.push(`/listcenter/edit/${plan.id}`);
            }}
          >
            <i className="fas fa-pen-square" />
          </Button>
          <Button
            className="darkgrey"
            type="button"
            onClick={(e) => {
              if (window.confirm("Delete plan with everything in it?"))
                deletePlan(plan.id)
                  .then(() => {
                    toast.success("I hope you said goodbye");
                  })
                  .then(() => {
                    plan?.userProfileId === currentUserId
                      ? history.push("/listcenter/listory")
                      : history.push("/");
                  });
            }}
          >
            <i className="fas fa-trash" />
          </Button>
        </CardBody>
      </Collapsible>
    </Card>
  );
};
export default PlanCard;
