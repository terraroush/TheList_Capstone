import React, { useContext } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import {
  Card,
  CardTitle,
  CardLink,
  CardHeader,
  CardBody,
  CardText,
  Button,
} from "reactstrap";
import "./Connection.css";

const ConnectionCard = ({ connection, name, email, userName, button }) => {
  const { deleteConnection, addConnection } = useContext(ConnectionContext);

  if (!connection) return null;
  return (
    <Card className="flex-flow">
      <CardHeader className="specify-width">
        <CardTitle>{name}</CardTitle>
        <Button
          className="connection-btns"
          type="submit"
          onClick={() => addConnection(connection)}
        >
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
