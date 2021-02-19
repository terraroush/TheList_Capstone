import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import PlanContainer from "../Plan/PlanContainer";

const ConnectionsPlanList = () => {
  const { connections, getAllConnections } = useContext(ConnectionContext);
  const userProfileId = +localStorage.getItem("userProfileId");

  // This fetch gets a very tailored collection of connection data
  useEffect(() => {
    getAllConnections(userProfileId);
  }, []);

  if (!connections) return null;

  return (
    <article>
      <h4>Friends List Feed</h4>
      <br />
      {connections.map((connection) => (
        <PlanContainer key={connection.id} plan={connection} />
      ))}
    </article>
  );
};
export default ConnectionsPlanList;
