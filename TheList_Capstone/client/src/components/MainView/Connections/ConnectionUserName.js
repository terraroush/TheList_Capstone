import React, { useContext } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import { Card, CardTitle, CardLink } from "reactstrap";

const ConnectionUserName = ({ connection }) => {
  const { deleteConnection } = useContext(ConnectionContext);

  return (
    <Card>
      <CardTitle>
        <CardLink>Connection UserName</CardLink>
      </CardTitle>
    </Card>
  );
};
export default ConnectionUserName;
