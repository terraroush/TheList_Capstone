import React, { useState, useContext, useEffect } from "react";
import { ListGroup } from "reactstrap";
import UserListItem from "./UserListItem";
import UserListDetails from "./UserListDetails";
import "./UserList.css";

const UserListCard = ({ tasks, setTasks }) => {
  return (
    <div className="task-container">
      <ListGroup className="task-list">
        {tasks.map((task) => (
          <UserListItem
            key={task.id}
            text={task.text}
            tasks={tasks}
            task={task}
            setTasks={setTasks}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default UserListCard;
