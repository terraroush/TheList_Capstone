import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import ConnectionCard from "./ConnectionCard";
import "./Connection.css";

const ConnectionList = () => {
  const {
    connections,
    possibleConnections,
    getConnectionsById,
    getNotConnectionsById,
    deleteConnection,
    addConnection,
  } = useContext(ConnectionContext);
  const userProfileId = +localStorage.getItem("userProfileId");

  //this will fetch unique connections already forged, then will fetch other users for possible connection
  useEffect(() => {
    getConnectionsById(userProfileId);
  }, []);

  useEffect(() => {
    getNotConnectionsById(userProfileId);
  }, [connections]);

  if (!connections) return null;
  if (!possibleConnections) return null;
  console.log(connections);
  return (
    <article>
      <h4>Your Connections</h4>
      <br />
      {connections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          userId={+connection.providerUserProfile?.id}
          name={connection.providerUserProfile?.name}
          email={connection.providerUserProfile?.email}
          userName={connection.providerUserProfile?.userName}
          button={"fas fa-trash"}
          onClick={() => deleteConnection(connection)}
        />
      ))}
      <br />
      <h4>Possible Connections</h4>
      <br />
      {possibleConnections.map((possibility) => (
        <ConnectionCard
          key={possibility.id}
          connection={possibility}
          userId={+possibility.id}
          name={possibility.name}
          email={possibility.email}
          userName={possibility.userName}
          button={"fas fa-plus-square"}
          onClick={() => addConnection(possibility)}
        />
      ))}
    </article>
  );
};
export default ConnectionList;
