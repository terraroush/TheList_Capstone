import React, { useState } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import * as s from "./UserList.styles";
import UserListForm from "./UserListForm";

const UserListCard = () => {
  return (
    <div>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Most Recent List</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              date created
            </CardSubtitle>
            <CardText>
              this will be where I add in the "list" component of "listItems"
            </CardText>
            <UserListForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default UserListCard;
