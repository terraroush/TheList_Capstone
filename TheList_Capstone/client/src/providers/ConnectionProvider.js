import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const ConnectionContext = createContext();

export function ConnectionProvider(props) {
  const apiUrl = "/api/planitem";

  const { getToken } = useContext(UserProfileContext);
  const [connections, setConnections] = useState([]);

  const getAllConnections = () => {
    getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((connections) => {
          setConnections(connections);
        })
    );
  };

  const getConnectionsById = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((connections) => {
          setConnections(connections);
        })
    );
  };

  const addConnection = (connection) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(connection),
      })
        .then((res) => res.json())
        .then((connections) => {
          setConnections(connections);
        })
    );
  };

  const updateConnection = (connection) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/${connection.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(connection),
      });
    });
  };

  const deleteConnection = (connection) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/${connection}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(() => getAllConnections());
    });
  };

  return (
    <ConnectionContext.Provider
      value={{
        getAllConnections,
        getConnectionsById,
        addConnection,
        setConnections,
        connections,
        updateConnection,
        deleteConnection,
      }}
    >
      {props.children}
    </ConnectionContext.Provider>
  );
}
