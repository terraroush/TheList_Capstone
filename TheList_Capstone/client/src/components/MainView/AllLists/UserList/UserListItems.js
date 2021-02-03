import React from "react";
import { CardText, CardBody } from "reactstrap";

const UserListItems = ({ userList }) => (
  <CardBody>
    {userList.listItems.length > 0
      ? userList.listItems.map((listItem) => (
          <CardText key={userList.listItems.id} listItem={listItem}>
            {listItem.name}
          </CardText>
        ))
      : ""}
  </CardBody>
);
export default UserListItems;
