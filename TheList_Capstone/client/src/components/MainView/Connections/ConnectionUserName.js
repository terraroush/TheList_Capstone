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

const ConnectionUserName = ({ connection }) => {
  const { deleteConnection } = useContext(ConnectionContext);

  if (!connection.providerUserProfile) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{connection.providerUserProfile.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{connection.providerUserProfile.email}</CardText>
        <CardText>
          --- see {connection.providerUserProfile.userName}'s{" "}
          <CardLink>lists</CardLink> ---
        </CardText>
      </CardBody>
    </Card>
  );
};
export default ConnectionUserName;
