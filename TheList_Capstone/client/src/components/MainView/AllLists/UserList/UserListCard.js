import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { UserListContext } from "../../../../providers/UserListProvider";
import * as s from "./UserList.styles";

const UserListCard = () => {
  const [userList, setUserList] = useState({});

  return (
    <div>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{userList.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default UserListCard;

// const List = (props) => {
//   const list = props.match.params.list;
//   const lists = {
//     list1: {
//       title: "Groceries mar 22",
//       dateCreated: "3/22/2021 12:00:00 AM",
//       listItems: ["Broccoli", "Rice", "Mushrooms"],
//     },
//     list2: {
//       title: "Potluck Graduation",
//       dateCreated: "1/24/2021 12:00:00 AM",
//       listItems: [
//         "seven layer dip",
//         "veggie side",
//         "croquettes",
//         "chocolate chip cookies",
//       ],
//     },
//     list3: {
//       title: "ToDo weekend",
//       dateCreated: "2/19/2021 12:00:00 AM",
//       listItems: ["post office", "interview question review", "update website"],
//     },
//   };
//   return (
//     <s.ListContainer>
//       <s.ListTitle>userList.title</s.ListTitle>
//       <s.ListDate></s.ListDate>
//       <s.ListItems></s.ListItems>
//     </s.ListContainer>
//   );
// };

// export default List;
