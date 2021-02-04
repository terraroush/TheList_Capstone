import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "./UserList.css";

// components
import UserListForm from "./UserListForm";
import UserListCard from "./UserListCard";
import UserListDetailsForm from "./UserListDetailsForm";

const UserListContainer = () => {
  // state
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputDeadline, setInputDeadline] = useState("");
  const [inputPublic, setInputPublic] = useState("");
  const [taskLists, setTaskLists] = useState([]);

  // effects

  // (only run once)
  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    saveLocalTasks();
  }, [tasks]);

  // save to local storage
  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTask = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTask);
    }
  };

  return (
    <>
      <div className="App">
        <UserListDetailsForm />
        <UserListForm
          tasks={tasks}
          setTasks={setTasks}
          setInputText={setInputText}
          inputText={inputText}
        />
        <UserListCard tasks={tasks} setTasks={setTasks} />
        <Button type="submit">Save</Button>
      </div>
    </>
  );
};
export default UserListContainer;
