import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import ConnectionUserName from "./ConnectionUserName";

const ConnectionList = () => {
  const { connections, getAllConnections } = useContext(ConnectionContext);

  const userProfileId = +localStorage.getItem("userProfileId");

  useEffect(() => {
    getAllConnections(userProfileId);
  }, []);
  console.log(connections);

  return (
    <article>
      <h3>Your Connections</h3>
      <br />

      <div>
        {connections?.map((connection) => {
          return (
            <ConnectionUserName key={connection.id} connection={connection} />
          );
        })}
      </div>
    </article>
  );
};
export default ConnectionList;
