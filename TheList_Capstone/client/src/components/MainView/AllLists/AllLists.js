import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const AllLists = () => {
  return (
    <>
      <h4>Select from your lists</h4>
      <ListGroup>
        <ListGroupItem>list1</ListGroupItem>
        <ListGroupItem>list2</ListGroupItem>
        <ListGroupItem>list3</ListGroupItem>
      </ListGroup>
    </>
  );
};

export default AllLists;
