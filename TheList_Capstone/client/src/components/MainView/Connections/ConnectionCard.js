import React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import "./Connection.css";

const ConnectionCard = ({
  connection,
  name,
  email,
  userName,
  button,
  onClick,
}) => {
  if (!connection) return null;
  return (
    <Card className="flex-flow">
      <CardHeader className="specify-width">
        <CardTitle>{name}</CardTitle>
        <Button className="connection-btns" type="submit" onClick={onClick}>
          {<i className={button} />}
        </Button>
      </CardHeader>
      <CardBody>
        <CardText>AKA {userName}</CardText>
        <CardText>{email}</CardText>
      </CardBody>
    </Card>
  );
};
export default ConnectionCard;
