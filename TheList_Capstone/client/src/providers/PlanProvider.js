import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PlanContext = createContext();

export function PlanProvider(props) {
  const apiUrl = "/api/plan";

  const { getToken } = useContext(UserProfileContext);
  const [plans, setPlans] = useState([]);
  const [currentPlan, setCurrentPlan] = useState();

  const getAllPlans = () => {
    getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((plans) => {
          setPlans(plans);
        })
    );
  };

  const getPlanById = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((plan) => {
          setCurrentPlan(plan);
        })
    );
  };
  const getPlansByUserId = (id) => {
    getToken().then((token) =>
      fetch(`${apiUrl}/getbyuser/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((plans) => {
          setPlans(plans);
        })
    );
  };
  const addPlan = (plan) => {
    return getToken().then((token) =>
      fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plan),
      }).then((res) => res.json())
    );
  };

  const updatePlan = (plan) => {
    getToken().then((token) => {
      fetch(`${apiUrl}/${plan.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plan),
      }).then(getAllPlans);
    });
  };

  const deletePlan = (plan) => {
    getToken().then((token) => {
      fetch(`${apiUrl}/${plan.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(getAllPlans);
    });
  };

  return (
    <PlanContext.Provider
      value={{
        getAllPlans,
        getPlanById,
        getPlansByUserId,
        currentPlan,
        addPlan,
        setPlans,
        plans,
        updatePlan,
        deletePlan,
      }}
    >
      {props.children}
    </PlanContext.Provider>
  );
}
