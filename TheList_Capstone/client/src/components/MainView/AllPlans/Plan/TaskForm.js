import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../../../providers/TaskProvider";
import { GroceryContext } from "../../../../providers/GroceryProvider";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Plan.css";
import IngredientList from "./IngredientList";

const TaskForm = ({ task, planId, isGrocery }) => {
  const { addTask, updateTask, deleteTask } = useContext(TaskContext);
  const {
    ingredientData,
    setIngredientData,
    getIngredientFromGrocery,
  } = useContext(GroceryContext);
  const [isLoading, setIsLoading] = useState(true);

  const defaultTask = {
    name: "",
    planId: planId,
  };

  const [currentTask, setCurrentTask] = useState(defaultTask);

  const submitTaskObjectHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    constructTaskObject();
  };

  useEffect(() => {
    if (task) {
      setIsLoading(false);
      setCurrentTask(task);
    } else {
      setIsLoading(false);
      setCurrentTask(defaultTask);
    }
  }, []);

  useEffect(() => {
    if (!task) {
      isGrocery && getIngredientFromGrocery(currentTask.name);
    }
  }, [currentTask]);

  const constructTaskObject = () => {
    if (task) {
      currentTask.id = task.id;
      updateTask(currentTask)
        .then(() => toast.success("good call on that edit"))
        .then((res) => {
          if (!res) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
          setIngredientData([]);
        });
    } else {
      addTask(currentTask).then(() => {
        setIsLoading(false);
        setCurrentTask(defaultTask);
        setIngredientData([]);
      });
    }
  };

  return (
    <Form
      className="planForm-container"
      inline
      onSubmit={submitTaskObjectHandler}
    >
      <FormGroup className="flexThis">
        <Label for="name" hidden>
          name
        </Label>
        <Input
          value={currentTask.name}
          name="name"
          id="name"
          onChange={(e) =>
            setCurrentTask({
              name: e.target.value,
              planId,
            })
          }
          type="text"
          placeholder="add to your list"
          className="plan-input"
        />
      </FormGroup>
      <Button className="plan-button" type="submit" disabled={isLoading}>
        {!task ? (
          <i className="fas fa-plus-square" />
        ) : (
          <i className="fas fa-pen-square" />
        )}
      </Button>

      {task && (
        <Button
          className="trash plan-button"
          type="submit"
          onClick={(e) => {
            if (window.confirm("delete this task?"))
              deleteTask(currentTask.id).then(() => {
                toast.success("I hope you said goodbye");
              });
          }}
          disabled={isLoading}
        >
          <i className="fas fa-trash" />
        </Button>
      )}
      {ingredientData.length > 0 && ingredientData[0].length > 0 && (
        <IngredientList
          className="ingredientList-container"
          ingredientData={ingredientData}
          chosenIngredient={currentTask}
          setChosenIngredient={setCurrentTask}
          planId={planId}
        />
      )}
    </Form>
  );
};

export default TaskForm;
