import React, { useState, useEffect, useContext } from "react";
import { ConnectionContext } from "../../../providers/ConnectionProvider";
import { ListGroup, ListGroupItem } from "reactstrap";

const Connections = ({ connections, setConnections }) => {
  const { getAllConnections } = useContext(ConnectionContext);

  useEffect(() => {
    getAllConnections();
  }, []);
  return (
    <>
      <h3>Your Connections</h3>
      <ListGroup>
        <ListGroupItem></ListGroupItem>
      </ListGroup>
    </>
  );
};

export default Connections;
