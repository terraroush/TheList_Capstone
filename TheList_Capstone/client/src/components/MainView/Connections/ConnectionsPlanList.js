import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import PlanContainer from "../AllPlans/Plan/PlanContainer";

const ConnectionsPlanList = () => {
  const { connections, getAllConnections } = useContext(ConnectionContext);

  const userProfileId = +localStorage.getItem("userProfileId");

  useEffect(() => {
    getAllConnections(userProfileId);
  }, [connections]);

  return (
    <article>
      <h3>Friends List Feed</h3>
      <br />
      {connections?.map((connection) => {
        return <PlanContainer key={connection.id} plan={connection} />;
      })}
    </article>
  );
};
export default ConnectionsPlanList;
