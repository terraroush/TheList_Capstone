import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserListContext } from "../../../../providers/UserListProvider";
import { Button } from "reactstrap";
import UserListCard from "./UserListCard";

const UserListList = () => {
  const { userLists, getUserListsByUserId } = useContext(UserListContext);

  const history = useHistory();
  const activeUser = localStorage.getItem("userProfile.id");
  console.log(activeUser);

  useEffect(() => {
    getUserListsByUserId(activeUser);
  }, []);

  return (
    <article>
      <h1>My Lists</h1>
      <Button onClick={() => history.push("/alllists/createlist")}></Button>

      <div>
        {userLists.map((userList) => (
          <UserListCard key={userList.id} userList={userList} />
        ))}
      </div>
    </article>
  );
};
export default UserListList;
