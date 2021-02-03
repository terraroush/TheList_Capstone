import React, { useContext, useEffect } from "react";
import { UserListContext } from "../../../../providers/UserListProvider";
import { ClientName } from "./ClientName";
import { useHistory } from "react-router-dom";

const UserListList = ({ userList }) => {
  const { userLists, getUserListsByUserId } = useContext(UserListContext);

  const history = useHistory();
  const activeUser = parseInt(localStorage.getItem("activeUser"));

  useEffect(() => {
    getUserListsByUserId(activeUser);
  }, []);

  return (
    <article className="clientList--grid">
      <h1 className="cursive">client book </h1>
      <Button
        className="cursive"
        fitted="true"
        size="large"
        icon="add"
        title="add new client"
        onClick={() => history.push("/clients/create")}
      ></Button>
      {/* <p>
        <small>click for more information</small>
      </p> */}

      <div className="clientList--list">
        {clients
          .sort((a, b) =>
            a.lastName.toUpperCase().localeCompare(b.lastName.toUpperCase())
          )
          .map((client) => (
            <ClientName key={client.id} client={client} />
          ))}
      </div>
    </article>
  );
};
