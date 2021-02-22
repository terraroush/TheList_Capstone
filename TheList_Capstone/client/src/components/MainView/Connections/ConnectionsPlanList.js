import React, { useContext, useEffect } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import PlanContainer from "../Plan/PlanContainer";
import { TaskContext } from "../../../providers/TaskProvider";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const ConnectionsPlanList = () => {
  const { connections, getAllConnections } = useContext(ConnectionContext);
  const { task } = useContext(TaskContext);
  const userProfileId = +localStorage.getItem("userProfileId");
  const history = useHistory();

  // This fetch gets a very tailored collection of connection data
  useEffect(() => {
    getAllConnections(userProfileId);
  }, [task]);

  if (!connections) return null;

  return (
    <article>
      <h4>Friends List Feed</h4>
      <br />
      {connections.length === 0 && "Coming Soon! Try adding some friends "}
      {connections.length === 0 && (
        <Button
          size="small"
          outline
          color="info"
          onClick={() => history.push("/connections")}
        >
          Connections
        </Button>
      )}
      {connections.map((connection) => (
        <PlanContainer key={connection.id} plan={connection} />
      ))}
    </article>
  );
};
export default ConnectionsPlanList;
