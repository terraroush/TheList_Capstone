import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserListContext } from "../../../../providers/UserListProvider";
import { Button } from "reactstrap";
import UserListCard from "./UserListCard";

const UserListList = () => {
  const { userLists, getUserListsByUserId } = useContext(UserListContext);

  const history = useHistory();
  const activeUser = localStorage.getItem("userProfileId");

  useEffect(() => {
    getUserListsByUserId(activeUser);
  }, []);

  if (!userLists) return null;

  return (
    <article>
      <h1>My Lists</h1>
      <Button
        size="small"
        outline
        color="info"
        onClick={() => history.push("/alllists/createlist")}
      >
        New List
      </Button>

      <div>
        {userLists.map((userList) => (
          <UserListCard key={userList.id} userList={userList} />
        ))}
      </div>
    </article>
  );
};
export default UserListList;
