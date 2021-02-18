import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import ConnectionUserName from "./ConnectionUserName";

const ConnectionList = () => {
  const { connections, getConnectionsById } = useContext(ConnectionContext);
  const userProfileId = +localStorage.getItem("userProfileId");

  //this will fetch unique connections
  useEffect(() => {
    getConnectionsById(userProfileId);
  }, [connections]);

  if (!connections) return null;

  return (
    <article>
      <h3>Your Connections</h3>
      <br />
      {connections.map((connection) => (
        <ConnectionUserName key={connection.id} connection={connection} />
      ))}
    </article>
  );
};
export default ConnectionList;
