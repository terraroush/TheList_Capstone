import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import ConnectionCard from "./ConnectionCard";

const ConnectionsPlanList = () => {
  const { connections, getAllConnections } = useContext(ConnectionContext);

  const userProfileId = +localStorage.getItem("userProfileId");

  useEffect(() => {
    getAllConnections(userProfileId);
  }, []);
  console.log(connections);

  return (
    <article>
      <h3>Connections List Feed</h3>
      <br />

      <div>
        {connections?.map((connection) => {
          return <ConnectionCard key={connection.id} connection={connection} />;
        })}
      </div>
    </article>
  );
};
export default ConnectionsPlanList;
