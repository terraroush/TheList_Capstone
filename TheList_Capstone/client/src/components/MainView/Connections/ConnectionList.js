import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import ConnectionCard from "./ConnectionCard";

const ConnectionList = () => {
  const {
    connections,
    possibleConnections,
    getConnectionsById,
    getNotConnectionsById,
  } = useContext(ConnectionContext);
  const userProfileId = +localStorage.getItem("userProfileId");

  //this will fetch unique connections already forged, then will fetch other users for possible connection
  useEffect(() => {
    getConnectionsById(userProfileId);
  }, []);

  useEffect(() => {
    getNotConnectionsById(userProfileId);
  }, []);

  if (!connections) return null;
  if (!possibleConnections) return null;
  console.log(
    "connections: ",
    connections,
    "possibilities: ",
    possibleConnections
  );

  return (
    <article>
      <h3>Your Connections</h3>
      <br />
      {connections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          name={connection.providerUserProfile.name}
          email={connection.providerUserProfile.email}
          userName={connection.providerUserProfile.userName}
        />
      ))}
      <h3>Possible Connections</h3>
      <br />
      {possibleConnections.map((possibility) => (
        <ConnectionCard
          key={possibility.id}
          connection={possibility}
          name={possibility.name}
          email={possibility.email}
          userName={possibility.userName}
        />
      ))}
    </article>
  );
};
export default ConnectionList;
