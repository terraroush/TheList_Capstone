import React, { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { UserProfileContext } from "./UserProfileProvider";

export const ConnectionContext = createContext();

export function ConnectionProvider(props) {
  const apiUrl = "/api/connection";

  const { getToken } = useContext(UserProfileContext);
  const [connections, setConnections] = useState([]);
  const [possibleConnections, setPossibleConnections] = useState([]);
  const currentUserId = +localStorage.getItem("userProfileId");

  const getAllConnections = (userProfileId) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/getplansfromconnections/${userProfileId}`, {
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
      fetch(`${apiUrl}/getconnectedbyuser/${id}`, {
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
  const getNotConnectionsById = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/getnotconnectedbyuser/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((possibleConnections) => {
          setPossibleConnections(possibleConnections);
        })
    );
  };

  const addConnection = (connection) => {
    const newConnection = {
      connecterUserProfileId: currentUserId,
      providerUserProfileId: connection.id,
    };
    return getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newConnection),
      }).then(() => getConnectionsById(currentUserId))
    );
  };

  const deleteConnection = (connection) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/${connection.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(() => getConnectionsById(currentUserId));
    });
  };

  return (
    <ConnectionContext.Provider
      value={{
        getAllConnections,
        getConnectionsById,
        getNotConnectionsById,
        addConnection,
        setConnections,
        connections,
        possibleConnections,
        setPossibleConnections,
        deleteConnection,
      }}
    >
      {props.children}
    </ConnectionContext.Provider>
  );
}
