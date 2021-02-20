import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const TaskContext = createContext();

export function TaskProvider(props) {
  const apiUrl = "/api/planitem";

  const { getToken } = useContext(UserProfileContext);
  const [task, setTask] = useState({});

  const addTask = (task) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((res) => res.json())
        .then((task) => {
          setTask(task);
        })
    );
  };

  // setting res to setTask to cause the re-render
  const updateTask = (task) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/${task.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }).then((res) => setTask(res));
    });
  };

  const deleteTask = (task) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/${task}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => setTask(res));
    });
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
        setTask,
        task,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
