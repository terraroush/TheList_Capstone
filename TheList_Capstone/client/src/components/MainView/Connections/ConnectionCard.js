import React, { useContext } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import {
  Card,
  CardTitle,
  CardLink,
  CardHeader,
  CardBody,
  CardText,
} from "reactstrap";

const ConnectionCard = ({ connection, name, email, userName }) => {
  const { deleteConnection } = useContext(ConnectionContext);

  if (!connection) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{email}</CardText>
        <CardText>
          --- see {userName}'s <CardLink>lists</CardLink> ---
        </CardText>
      </CardBody>
    </Card>
  );
};
export default ConnectionCard;
