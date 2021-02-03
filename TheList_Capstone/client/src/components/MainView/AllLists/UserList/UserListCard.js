import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardHeader,
} from "reactstrap";

import UserListForm from "./UserListForm";
import UserListItems from "./UserListItems";

const UserListCard = ({ userList }) => {
  const { isEditing, setIsEditing } = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">{userList.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {userList.dateCreated}
        </CardSubtitle>
      </CardHeader>
      <UserListItems key={userList.id} userList={userList} />
      <CardFooter>
        <UserListForm />
      </CardFooter>
    </Card>
  );
};

export default UserListCard;
