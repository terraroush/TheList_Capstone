import React from "react";
import { Link } from "react-router-dom";
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
  userId,
}) => {
  if (!connection) return null;
  console.log(userId);
  return (
    <Card className="flex-flow">
      <CardHeader className="specify-width">
        <CardTitle>
          <Link to={`/connections/${userId}`}>{name}</Link>
        </CardTitle>
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
