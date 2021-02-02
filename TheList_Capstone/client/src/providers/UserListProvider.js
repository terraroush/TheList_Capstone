import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./providers/UserProfileProvider";

export const UserListContext = createContext();

export function UserListProvider(props) {
  const apiUrl = "/api/userList";

  const { getToken } = useContext(UserProfileContext);
  const [userLists, setUserLists] = useState([]);

  const getAllUserLists = () => {
    getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((userLists) => {
          setUserLists(userLists);
        })
    );
  };

  const getUserListsById = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((userLists) => {
          setUserLists(userLists);
        })
    );
  };
  const getUserListsByUserId = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/getbyuser/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((userLists) => {
          setUserLists(userLists);
        })
    );
  };

  const updateUserList = (userList) => {
    getToken().then((token) => {
      fetch(`${apiUrl}/${userList.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userList),
      }).then(getAllUserLists);
    });
  };

  const deleteUserList = (userList) => {
    getToken().then((token) => {
      fetch(`${apiUrl}/${userList.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(getAllUserLists);
    });
  };

  return (
    <UserListContext.Provider
      value={{
        getAllUserLists,
        getUserListsById,
        getUserListsByUserId,
        setUserLists,
        userLists,
        updateUserList,
        deleteUserList,
      }}
    >
      {props.children}
    </UserListContext.Provider>
  );
}
