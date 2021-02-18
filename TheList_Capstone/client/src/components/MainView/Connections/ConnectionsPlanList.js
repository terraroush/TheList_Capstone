import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import PlanContainer from "../AllPlans/Plan/PlanContainer";

const ConnectionsPlanList = () => {
  const { connections, getAllConnections } = useContext(ConnectionContext);
  const userProfileId = +localStorage.getItem("userProfileId");

  // This fetch gets a very tailored collection of connection data
  useEffect(() => {
    getAllConnections(userProfileId);
  }, [connections]);

  if (!connections) return null;

  return (
    <article>
      <h3>Friends List Feed</h3>
      <br />
      {connections.map((connection) => (
        <PlanContainer key={connection.id} plan={connection} />
      ))}
    </article>
  );
};
export default ConnectionsPlanList;
