import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const TaskContext = createContext();

export function TaskProvider(props) {
  const apiUrl = "/api/planitem";

  const { getToken } = useContext(UserProfileContext);
  const [tasks, setTasks] = useState([]);

  const getAllTasks = () => {
    getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((tasks) => {
          setTasks(tasks);
        })
    );
  };

  const getTasksById = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((tasks) => {
          setTasks(tasks);
        })
    );
  };

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
        .then((tasks) => {
          setTasks(tasks);
        })
    );
  };

  const updateTask = (task) => {
    return getToken().then((token) => {
      fetch(`${apiUrl}/${task.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    });
  };

  const deleteTask = (task) => {
    debugger;
    return getToken().then((token) => {
      fetch(`${apiUrl}/${task}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(() => getAllTasks());
    });
  };

  return (
    <TaskContext.Provider
      value={{
        getAllTasks,
        getTasksById,
        addTask,
        setTasks,
        tasks,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
