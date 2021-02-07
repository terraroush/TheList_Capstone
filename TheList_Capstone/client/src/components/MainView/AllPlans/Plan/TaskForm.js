import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../../../providers/TaskProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Plan.css";

const TaskForm = ({ task, planId }) => {
  const { addTask, updateTask } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(true);
  const defaultTask = {
    name: "",
    planId: planId,
  };
  const [currentTask, setCurrentTask] = useState(defaultTask);

  let taskId;

  const handleControlledInputChange = (e) => {
    const newTask = { ...currentTask };
    newTask[e.target.name] = e.target.value;
    setCurrentTask(newTask);
  };

  const submitTaskObjectHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    constructTaskObject();
  };

  useEffect(() => {
    if (task) {
      setIsLoading(false);
      taskId = task.id;
      setCurrentTask(task);
    } else {
      setIsLoading(false);
      setCurrentTask(defaultTask);
    }
  }, []);

  const constructTaskObject = () => {
    if (task) {
      updateTask({
        id: taskId,
        name: currentTask.name,
        planId,
      }).then((res) => {
        if (!res) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      });
    } else {
      addTask({
        name: currentTask.name,
        planId,
      }).then(() => {
        setIsLoading(false);
        setCurrentTask(defaultTask);
      });
    }
  };
  console.log("the current task", currentTask, "state task", task);
  return (
    <Form inline onSubmit={submitTaskObjectHandler}>
      <FormGroup>
        <Label for="name" hidden>
          name
        </Label>
        <Input
          value={currentTask.name}
          name="name"
          id="name"
          onChange={handleControlledInputChange}
          type="text"
          placeholder="add to your list"
          className="plan-input"
        />
      </FormGroup>
      <Button className="plan-button" type="submit" disabled={isLoading}>
        {!task ? (
          <i className="fas fa-plus-square" />
        ) : (
          <i className="fas fa-edit-square" />
        )}
      </Button>
    </Form>
  );
};

export default TaskForm;
