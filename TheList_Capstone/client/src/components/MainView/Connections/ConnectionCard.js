import React, { useContext } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import { Card, CardHeader, CardTitle } from "reactstrap";

const ConnectionCard = ({ connection }) => {
  const { deleteConnection } = useContext(ConnectionContext);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{connection.title}</CardTitle>
        </CardHeader>
      </Card>

      <button
        onClick={(e) => {
          if (window.confirm("Would you like to delete this connection?"))
            deleteConnection(connection);
        }}
      >
        delete
      </button>
    </>
  );
};
export default ConnectionCard;
