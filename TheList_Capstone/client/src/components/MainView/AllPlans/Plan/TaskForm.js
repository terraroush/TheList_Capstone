import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../../../providers/TaskProvider";
import { Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import { useParams } from "react-router-dom";
import "./Plan.css";

const TaskForm = ({ task, setTask, inputText, setInputText }) => {
  const { addTask, getTasksById, updateTask } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(true);
  const { taskId, planId } = useParams();

  // handlers;

  const handleControlledInputChange = (e) => {
    const newTask = { ...task };
    newTask[e.target.name] = e.target.value;
    setTask(newTask);
  };

  const submitTaskObjectHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    constructTaskObject();
  };

  useEffect(() => {
    if (taskId) {
      getTasksById(taskId);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [taskId]);

  const constructTaskObject = () => {
    if (taskId) {
      updateTask({
        id: task.id,
        name: task.name,
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
        name: task.name,
        planId,
      }).then(() => {
        setIsLoading(false);
      });
    }
  };

  return (
    <>
      <Form inline>
        <FormGroup>
          <Label for="planItemInput" hidden>
            planItemInput
          </Label>
          <Input
            value={task.name}
            name="planItemInput"
            id="planItemInput"
            onChange={handleControlledInputChange}
            type="text"
            placeholder="add to your list"
            className="plan-input"
          />
        </FormGroup>
        <Button
          onSubmit={submitTaskObjectHandler}
          className="plan-button"
          type="submit"
          disabled={isLoading}
        >
          <i className="fas fa-plus-square"></i>
        </Button>
      </Form>
    </>
  );
};

export default TaskForm;
